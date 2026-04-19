asra3.js
export const data = {
  name: "اسرع",
  description: "لعبة الكلمات السريعة",
};

export async function execute(interaction) {

  const easy = ["بيت", "قلم", "شمس", "باب"];
  const medium = ["مدرسة", "سيارة", "كتاب", "هاتف"];
  const hard = ["برمجة", "مستشفى", "تكنولوجيا", "استراتيجية"];

  const rand = Math.random();

  let level;
  let word;

  if (rand < 0.5) {
    level = "🟢 سهل";
    word = easy[Math.floor(Math.random() * easy.length)];
  } 
  else if (rand < 0.8) {
    level = "🟡 متوسط";
    word = medium[Math.floor(Math.random() * medium.length)];
  } 
  else {
    level = "🔴 صعب";
    word = hard[Math.floor(Math.random() * hard.length)];
  }

  await interaction.reply(`⚡ المستوى: ${level}\n🧠 الكلمة: ${word}`);
      }
