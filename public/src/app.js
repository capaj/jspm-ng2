import {bootstrap} from 'angular2/platform/browser';
import {Component, Injectable} from 'angular2/core';
import template from './hello.html!text'

@Injectable()
class ImagesFactory {
  getUrls(): Array {
    let url = 'http://www.reddit.com/r/perfectloops/top.json?sort=top&t=week'
    return fetch(url)
      .then(response => response.json())
      .then(json => json.data.children
        .map(a => a.data.url)
        .filter(a => /\.(gif|jpg|png)$/.exec(a)))

  }
}

@Component({
    selector: 'my-app',
    providers: [ImagesFactory],
    template: template
})

class MyAppComponent {
    name: String;
    img: String;

    constructor(images: ImagesFactory) {
      this.name = "world"
      images.getUrls().then(ar => this.img = ar[0])
    }
}

bootstrap(MyAppComponent);
