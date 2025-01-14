import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Tennis AI Chat';
  userMessage: string = '';
  chatHistory: { sender: 'user' | 'ai'; message: string }[] = [];

  constructor() {}

  ngOnInit(): void {}

  sendMessage(): void {
    if (this.userMessage.trim()) {
      this.chatHistory.push({ sender: 'user', message: this.userMessage });
      this.generateAIResponse(this.userMessage);
      this.userMessage = '';
    }
  }

  generateAIResponse(userInput: string): void {
    // Symulowana odpowiedź AI
    const aiResponse = `AI: I received your message "${userInput}". Let's play some tennis!`;
    setTimeout(() => {
      this.chatHistory.push({ sender: 'ai', message: aiResponse });
    }, 1000); // Dodanie opóźnienia dla realizmu
  }
}
