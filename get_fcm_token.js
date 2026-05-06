const { JWT } = require('google-auth-library');

// Ye values aapke diye huye Service Account JSON se hain
const serviceAccount = {
  "client_email": "firebase-adminsdk-fbsvc@khan-hdfc-gk-apcd006.iam.gserviceaccount.com",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDVnE4CXB4u/Ny0\ndQJWJ4Xa5OXpv8Y3tyPHd/S8nQBXJNNf5iqEarTt9Vy1JvUVufEZcO5XRwVqIYx0\nxJ4ULmsWTe8hnxuk3ChA+B+4JxvgUBlQJzRBhpNU/7lmTq+H7tRBC//i1CGhyZw8\nsoAdk1AIhgQYK6nKPTWADBeamWJtVoAwthTJYtdSKLY3J2Ca0zoVqD+IjyKLuZBd\nn710/5g4rTFKPmIjhf6VaPi6JHw3TVJgmjTlWCqvOK307Lt4duRycFjFJc3bug8P\nVkVIfgUs3dyFeLqhVSWis0RkOY7NXqnXRapqeBB2onWa7raDgcKsGagSrLX8uRMy\nw2T17539AgMBAAECggEAM2FUK0GkmflFDhv5+qapjgASZFH2V/bzgnpyUf7yssNf\nG3lVv0GacQVcbg9nkrkFyvCMx84DuaZFrl2Px3tt0zDeROhMQjCZdx0npgg0LpWd\nrRes/FjmLeMP4ZGqK4hxIg9ElrcfOtbvf3MRGWwSa2Zu7DBueACWkoz2DX/4+qLL\n7E6oprTXZ8DPD7Ikz9mwECH56aGQsJj9r1jEGpS64OBWEQsJhm1Gn0fGQCa0ce1j\ngYXdzHoP+oAAeEpeaKFD4IbXiF87Nhg/W0J3jJ4kHak+CnQJVPOCgy7i9EMGAaUt\nmhvmUbWKjFj5GEQKM2+BpRQC0nU7fXwwsDIs5jBLWQKBgQD2yGl2aZ5C/o3Ps0hW\nG38HjSJ+zwNxWpAQw69tqfXeXIGaZ1gxEuDGdmdEEO1VlDeJw85YwWjJJz+2Scxv\n16WxzxfiZ4xM0Wplm8/uwY24stMtBymhnwpDWK+sksxSPAd0otPpNjUIwVA41ZLB\nk/CDg5PbYKSwoT2nk4TDF9NXiQKBgQDdlrgq1ppI/Rim9/+ok1pBmT6oibYz5TWw\nn68w4Qy2/OkHCUWqDlzk/zDGt3/B6WLC5s2ZuOBjaO40fFy7jYeUIxSDnSM4Xrr3\nlbhy7+8W0dHy0w8i/yLuOvgxzSXbvUMhpcHpUqHsU2QR0ih09mzhZYAjOLcUHq50\nhwFCtW5B1QKBgFtsfZ2PnUDmevTiTz8PKq1KfOgLmxPoYAzF4fy3hU2eaakg9gwg\nGUOM487Ukogsw7J25r/8zuwObU0D5AffFRRdS1Tl1ZUz073Wzl5+OBmfrho1WBf3\nCl9OwK4nKCii8oQkOmtgWJ9otmaHwLmUK/scyK7yC7Ef2u50+S8paXM5AoGAVVAB\n9/xHynInW6F/vNd+mGL3zMu4aqKE2Uuhl6AN1SXqUdswBxkgisn1bYyYk3/XllJm\nNhkHyz5K98opqcwDtvUKoOGO/dT7BveN3DKkSpTd0C+SVFcGi9IIXKQvPzrO7dVz\novE9hk9U58eR6/Y0VVNO0kCzu/tUD2krAxP3L0ECgYEAviOj4FV2kL9ObRTtNYcT\na/oq9esjXHTDReqxnLu7ifAXsqSmpQ4HfL72sz37U7UFdLNjHkU1tRNNCnKFEkxL\np44iS9wSOjwDanLOdfR5ydVRxcMhD81sPkaVCMZuOQSclEcCN1NPOMHQJVAJ3CHY\nZkQ2J5UZwwnq67B/KmS65RM=\n-----END PRIVATE KEY-----\n",
  };

async function getAccessToken() {
  const client = new JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
  });

  try {
    const tokens = await client.authorize();
    console.log('\n--- AAPKA NAYA FCM ACCESS TOKEN ---');
    console.log(tokens.access_token);
    console.log('------------------------------------\n');
    console.log('Is token ko copy karein aur script.js mein FCM_ACCESS_TOKEN ki jagah paste karein.');
    console.log('Yaad rahe: Ye token 1 ghante baad expire ho jayega.');
  } catch (error) {
    console.error('Error fetching access token:', error);
  }
}

getAccessToken();