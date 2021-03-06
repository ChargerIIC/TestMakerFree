﻿import { Component, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "quiz-list",
	templateUrl: './quiz-list.component.html',
	styleUrls: ['./quiz-list.component.css']
})

export class QuizListComponent {
	http: HttpClient;
	title: string;
	selectedQuiz: Quiz;
	quizzes: Quiz[];

	///Intresting note - the use of @Inject here
	constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
		this.http = http;
		this.title = "Latest Quizzes";
		var url = baseUrl + "api/quiz/Latest/";

		this.http.get<Quiz[]>(url).subscribe(result => {
			this.quizzes = result;
		}, error => console.error(error));
	}

	onSelect(quiz: Quiz) {
		this.selectedQuiz = quiz;
		console.log("quiz with Id "
			+ this.selectedQuiz.Id
			+ " has been selected.");
	}
}