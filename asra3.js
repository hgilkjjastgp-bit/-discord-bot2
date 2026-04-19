export const data = {
  name: "اسرع",
  description: "لعبة كلمات بمستويات مختلفة ووقت",
};

export async function execute(interaction) {

  const easy = [
    "بيت", "قلم", "شمس", "باب", "ماء", "نار", "قمر", "شجرة"
  ];

  const medium = [
    "مدرسة كبيرة", "سيارة سريعة", "هاتف حديث", "كتاب مفيد",
    "طريق طويل", "مدينة جميلة", "حديقة واسعة"
  ];

  const hard = [
    "برمجة متقدمة جداً", "استراتيجية ذكية للفوز",
    "تكنولوجيا حديثة جداً", "اقتصاد عالمي معقد",
    "إدارة وقت فعالة", "مشروع تخرج صعب"
  ];

  // نخلي الصعب أكثر احتمال
  const rand = Math.random();

  let level;
  let word;

  if (rand < 0.3) { 
    level = "🟢 سهل";
    word = easy[Math.floor(Math.random() * easy.length)];
  } 
  else if (rand < 0.6) {
    level = "🟡 متوسط";
    word = medium[Math.floor(Math.random() * medium.length)];
  } 
  else {
    level = "🔴 صعب";
    word = hard[Math.floor(Math.random() * hard.length)];
  }

  await interaction.reply(
    `⚡ لعبة أسرع بدأت!\n` +
    `📊 المستوى: ${level}\n` +
    `🧠 الكلمة: **${word}**\n` +
    `⏱️ لديك 15 ثانية لكتابه

const cooldown = new Map();

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const userId = message.author.id;
  const now = Date.now();
  const cooldownTime = 3000; // 3 ثواني

  if (cooldown.has(userId)) {
    const lastTime = cooldown.get(userId);

    if (now - lastTime < cooldownTime) {
      message.delete().catch(() => {});
      return message.channel.send("⛔ لا ترسل رسائل بسرعة (سبام)").then(msg => {
        setTimeout(() => msg.delete().catch(() => {}), 3000);
      });
    }
  }

  cooldown.set(userId, now);
});
