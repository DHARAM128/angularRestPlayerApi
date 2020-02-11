import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  posts = [];
  fakeApiUrl = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {
    this.http.get<any>(this.fakeApiUrl).subscribe(post => {
      this.posts = post;
    });
  }

  createTitle(input) {
    let post = { title: input.value };
    this.http.post<any>(this.fakeApiUrl, post).subscribe(post => {
      this.posts.splice(0, 0, post);
    });
  }
  removeTitle(post) {
    this.http.delete<any>(`${this.fakeApiUrl}/${post.id}`).subscribe(_ => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log(`${this.fakeApiUrl}/${post.id}`);
    });
  }
  updateTitle(post) {
    this.http
      .put<any>(`${this.fakeApiUrl}/${post.id}`, post)
      .subscribe(update => {
        console.log(update);
      });
  }

  ngOnInit() {}
}
