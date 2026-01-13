import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Qr Code Generator',
      description: 'QR code Generator.',
      image: 'https://images.unsplash.com/photo-1550482781-48d477e61c72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cXIlMjBjb2RlfGVufDB8fDB8fHww',
      link: 'https://your-own-qrcode.netlify.app/',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      title: 'Naruto Game',
      description: 'The game is based between the hero of the konoha village : Naruto VS his/her compatriots. You have to throw the kunai weapon aiming rightly towards the enemy with precision.',
      image: 'https://images.unsplash.com/photo-1594007759138-855170ec8dc0?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://thenarutogame.netlify.app/',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 3,
      title: 'Evacuate The Sheep Game',
      description: 'This game is very tricky. You have to be careful that you do not touch the Devil. Finish on Time or the devil will capture the sheeps.',
      image: 'https://plus.unsplash.com/premium_vector-1732208592440-f9a4e92d0279?q=80&w=938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://evacuatethesheep.netlify.app/',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 4,
      title: 'Mario UI',
      description: 'Productivity application allowing users to organize tasks with Kanban boards, powered by Firebase backend.',
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://mario-club-ui.netlify.app/',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 4,
      title: 'Every AI',
      description: "Whether you're a tech enthusiast, developer, startup founder, or just AI-curious – EveryAI serves as your personal directory of cutting-edge AI platforms, categorized and curated for easy exploration. From text generators to image creators, voice AI to automation tools – it's all here, and it's all future-facing.",
      image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://everyai-site.netlify.app/',
      tags: ['Angular', 'Bootstrap', 'FontAwesome']
    },
    {
      id: 4,
      title: 'Love Calculator',
      description: 'Find out about the situation of your relationship !!',
      image: 'https://images.unsplash.com/photo-1579208566219-c290206c3fce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://urlove-situation.netlify.app/',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 4,
      title: 'Quiz App',
      description: 'Quiz App.',
      image: 'https://plus.unsplash.com/premium_photo-1680303134459-912abf8efe2f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://quizbasedapp.netlify.app/',
      tags: ['HTML', 'CSS', 'JavaScript']
    }
  ];
}
