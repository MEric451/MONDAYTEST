import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CounterService } from '../../services/counter.service'; // Import CounterService

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];
  users: User[] = [];
  filteredUsers: User[] = [];

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private counterService: CounterService // Inject CounterService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.filteredUsers = data; // Initially, show all users
      this.counterService.setCount(data.length); // Initialize counter
    });
  }

  viewDetails(user: User) {
    this.dialog.open(UserDetailsComponent, {
      width: '400px',
      data: user
    });
  }

  filterUsers(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const searchValue = inputElement?.value.trim().toLowerCase();

    if (!searchValue) {
      this.filteredUsers = this.users; // Reset to all users if search is empty
      return;
    }

    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue)
    );

    if (this.filteredUsers.length === 0) {
      this.toastr.info('User not found!', 'Search Result');
    }
  }

  deleteUser(userId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { message: 'Are you sure you want to delete this user?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.users = this.users.filter(user => user.id !== userId);
        this.filteredUsers = [...this.users];
        this.toastr.warning('User deleted successfully!', 'Deleted');

        this.counterService.decrement(); // 🔽 Decrement counter when user is deleted
      }
    });
  }

  addUser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newUser: User = { id: this.users.length + 1, ...result }; // Assign a fake ID
        this.users.push(newUser);
        this.filteredUsers = [...this.users]; // Update the displayed list

        this.toastr.success('User added successfully!', 'Success', {
          timeOut: 9000, 
          positionClass: 'toast-top-right',
          progressBar: true
        });

        this.counterService.increment(); // 🔼 Increment counter when user is added
      }
    });
  }
}
