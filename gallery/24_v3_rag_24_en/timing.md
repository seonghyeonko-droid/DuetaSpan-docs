# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was reading about… unusual delicacies. Is it true you can’
     6.75s  agent 발화 시작: That’s a fascinating question.
     6.76s  user  발화 끝
     7.90s  <ret> 발화 (turn2 첫 프레임)
     7.90s  ⚡SPAN 주입 [d'=0.00s / d_lead=1.83s]: The ortolan bunting is a small migratory bird whose consumption has be
     8.41s  agent 발화 끝
     8.50s  agent 발화 시작: <ret> Well, it’s a bit complicated… Since nineteen eighty-on
    15.09s  agent 발화 끝
    15.39s  user  발화 시작: Oh, wow. Why? Is it endangered or something?
    18.62s  user  발화 끝
    19.10s  agent 발화 시작: It’s a little more nuanced than simple endangerment, actuall
    21.81s  <ret> 발화 (turn5 첫 프레임)
    22.41s  agent 발화 시작: <ret> Let me look into the reasons for that… Historically, o
    22.48s  agent 발화 끝
    22.77s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.32s]: Historically hunted for their rich flavor, ortolan populations decline
    31.54s  agent 발화 끝
    32.33s  user  발화 시작: So, it’s a historical thing then? People used to eat them al
    36.63s  user  발화 끝
    36.74s  agent 발화 시작: [laugh] Quite a lot, yes, though it was always considered a 
    39.60s  <ret> 발화 (turn8 첫 프레임)
    40.20s  agent 발화 시작: <ret> It’s interesting how traditions evolve… Historically, 
    40.26s  agent 발화 끝
    40.60s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.44s]: The consumption of ortolan was historically a symbol of wealth and sta
    47.52s  agent 발화 끝
