import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-job-posting',
    standalone: true,
    imports: [],
    templateUrl: './job-posting.component.html',
    styleUrl: './job-posting.component.scss'
})
export class JobPostingComponent {
    @Input() jobTitle!: string;
    @Input() location!: string;
    @Input() datePosted!: string;
}
