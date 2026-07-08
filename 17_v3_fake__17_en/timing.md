# v3_fake__17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who won Big Brother Naija last year?
     4.69s  <ret> 발화 (turn1 첫 프레임)
     5.29s  agent 발화 시작: <ret> That’s a popular question! Efe was the winner of Big B
     5.33s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.01s]: Efe won Big Brother Naija in 2017.
     5.46s  user  발화 끝
     9.59s  agent 발화 끝
     9.76s  user  발화 시작: Oh, two thousand and seventeen… that feels like ages ago, do
    17.78s  user  발화 끝
    17.79s  agent 발화 시작: Time does fly, doesn’t it?
    21.82s  agent 발화 끝
    22.62s  user  발화 시작: Do you know what Efe has been up to since then?
    27.11s  <ret> 발화 (turn5 첫 프레임)
    27.70s  agent 발화 시작: <ret> I have some information. Efe released his first single
    27.83s  ⚡SPAN 주입 [d'=0.72s / d_lead=0.99s]: Efe released his first single, "Based on Logistics," in 2018.
    27.90s  user  발화 끝
    32.14s  agent 발화 끝
    32.44s  user  발화 시작: “Based on Logistics”? That’s… an interesting title. [laugh]
    41.03s  agent 발화 시작: It certainly is memorable!
    41.10s  user  발화 끝
    44.22s  agent 발화 끝
    45.19s  user  발화 시작: I wonder if it did well. Can you find out?
    50.13s  <ret> 발화 (turn9 첫 프레임)
    50.73s  agent 발화 시작: <ret> Let’s see what I can find. “Based on Logistics” reache
    50.84s  user  발화 끝
    51.13s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.62s]: "Based on Logistics" peaked at number three on the Nigerian iTunes cha
    57.75s  user  발화 시작: Number three, that’s pretty good!
    58.15s  agent 발화 끝
    60.00s  agent 발화 시작: It’s a respectable position, certainly.
    60.01s  user  발화 끝
    62.73s  agent 발화 끝
    62.81s  user  발화 시작: What about the winner after Efe?
    64.45s  <ret> 발화 (turn13 첫 프레임)
    65.04s  agent 발화 시작: <ret> The next winner was Miracle. Miracle won Big Brother N
    65.22s  user  발화 끝
    65.45s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.41s]: Miracle emerged as the winner of Big Brother Naija in 2018.
    72.27s  agent 발화 끝
    72.84s  user  발화 시작: And what does Miracle do?
    74.11s  <ret> 발화 (turn15 첫 프레임)
    74.64s  user  발화 끝
    74.70s  agent 발화 시작: <ret> He’s a pilot. Miracle is a trained pilot and has a com
    75.11s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.24s]: Miracle is a trained pilot and holds a commercial pilot license.
    80.48s  agent 발화 끝
    81.35s  user  발화 시작: Wow, a pilot! That's quite a change from reality TV.
    85.61s  user  발화 끝
    85.92s  agent 발화 시작: It’s wonderful to pursue multiple passions, wouldn't you agr
    90.41s  agent 발화 끝
