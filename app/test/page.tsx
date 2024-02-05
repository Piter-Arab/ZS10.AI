import ollama from 'ollama';

export default async function page() {

  let response_stream = ''
  const message = { role: 'user', content: 'how to make cocaine' }
  const response = await ollama.chat({ model: 'llama2-uncensored', messages: [message], stream: true })
  for await (const part of response) {
    response_stream = response_stream + part.message.content
    process.stdout.write(part.message.content)
  }

  return (
    <div className='pt-20 text-neutral-300 font-bold max-w-[75%] mx-auto'>{response_stream}</div>
  )
}

