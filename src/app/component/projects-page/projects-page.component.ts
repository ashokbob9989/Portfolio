import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { projects, sharePlatforms } from '../../data/data';


interface Comment {
  user: string;
  text: string;
}

interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  tech: string[];
  likes: number;
  comments: Comment[];
  github: string;
  live: string;
  liked: boolean;
  showCommentInput: boolean;
  showShareOptions: boolean;
  newComment: string;
  iconClass: string;
}


@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {

  projects = projects;
  sharePlatforms = sharePlatforms;

  shareProject(platform: { name: string; icon: string; urlPrefix: string }, project: Project) {
    const projectUrl = window.location.href + '#project-' + project.id;
    const shareUrl = platform.urlPrefix + encodeURIComponent(projectUrl);
    window.open(shareUrl, '_blank');
  }

  // Toggle like/unlike
  toggleLike(project: any) {
    project.liked = !project.liked;
    project.likes += project.liked ? 1 : -1;
  }

  // Add comment
  addComment(project: any) {
    if (project.newComment && project.newComment.trim() !== '') {
      project.comments.push({ user: 'You', text: project.newComment });
      project.newComment = '';
      project.showCommentInput = false;
    }
  }

  // Optional: Smooth scroll to project if URL has hash
  scrollToProjectFromHash() {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
