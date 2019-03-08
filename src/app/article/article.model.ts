export class Article {
  votes: number;
  title: string;
  link: string;
  description: string;

  constructor(title: string, link: string, description?: string, votes?: number) {
    this.votes = votes || 0;
    this.title = title
    this.description = description;
    if (link.includes('http://')) {
      this.link = link;
    } else {
      this.link = 'http://'.concat(link);
    }
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split('//')[1];
      // e.g. foo.com/path/to/bar
      return domainAndPath.split('/')[0];
      // return: foo.com
    } catch (err) {
      return null;
    }
  }
}
