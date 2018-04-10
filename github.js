class Github {
    constructor() {
        this.client_id = '0020a420295b39063c7f';
        this.client_secret = '8ee615f269c6959a0554c49ce68420ec13427d99';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();
        return {
            profile: profileData,
            repos: reposData
        }
    }
}