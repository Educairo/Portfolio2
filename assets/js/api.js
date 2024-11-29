
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Educairo/Portfolio/refs/heads/main/Portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}