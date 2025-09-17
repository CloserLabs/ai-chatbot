// Debug script to test AWS endpoint directly
const AWS_ENDPOINT = 'https://hx3yxzfe18.execute-api.us-east-1.amazonaws.com/prod/sllm-class101';

async function testAWS() {
  try {
    const response = await fetch(AWS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: '안녕하세요',
      }),
    });

    console.log('Status:', response.status);
    console.log('Headers:', Object.fromEntries(response.headers));
    
    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

testAWS();