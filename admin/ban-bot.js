module.exports = async ({ message, kickChatMember, deleteMessage }) => {
  const blacklistes = message.new_chat_members.filter((member) => (
    member.is_bot ||
    member.first_name.startsWith('╋VX,QQ（同号）') ||
    member.first_name.startsWith('╋VX(QQ)') || 
    message.startsWith('НЕ БЛАГОДАРИ') || 
    message.startsWith('НАЧНИ ТРЕЙДИТЬ') || 
    message.startsWith('НАЧНИ ТОРГОВАТЬ') || 
    message.startsWith('ТЫ БУДЕШЬ В ШОКЕ') || 
    message.startsWith('Нашёл инсайд') || 
    message.startsWith('-') || 
    message.startsWith('Каспер сосатб')   
  ))

  if (blacklistes.length > 0) {
    for (const member of blacklistes) {
      await kickChatMember(member.id)
    }
  }

  await deleteMessage()
}
