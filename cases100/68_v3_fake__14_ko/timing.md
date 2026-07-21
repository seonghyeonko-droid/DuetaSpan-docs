# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 자두나무는 언제 남미로 이동하나요?
     3.19s  <ret> 발화 (turn1 첫 프레임)
     3.21s  agent 발화 시작: <ret> 음, 자두나무는 겨울에 남미로 이동하는 걸로 알려져 있어요.
     3.23s  user  발화 끝
     4.38s  ⚡SPAN 주입 [d'=1.19s / d_lead=5.22s]: winter.
     6.23s  user  발화 시작: 네.
     6.95s  user  발화 끝
     8.44s  agent 발화 끝
     9.66s  user  발화 시작: 아, 그렇군요. 혹시 지금 서울 날씨는 어떤가요?
    13.44s  user  발화 끝
    13.57s  <ret> 발화 (turn4 첫 프레임)
    13.76s  agent 발화 시작: <ret> 지금 서울 날씨를 확인해 볼까요?
    14.41s  ⚡SPAN 주입(IRRELEVANT) [d'=0.84s / d_lead=2.58s]: The average high temperature in Honolulu, Hawaii in July is 88 degrees
    15.88s  <ret> 발화 (turn5 첫 프레임)
    16.28s  agent 발화 시작: <ret> 현재 서울은 이십육도이고 구름이 조금 있어요.
    16.34s  agent 발화 끝
    17.08s  ⚡SPAN 주입 [d'=1.21s / d_lead=4.48s]: (tool result) Current conditions in Seoul are 26°C and partly cloudy.
    20.77s  agent 발화 끝
    20.99s  user  발화 시작: 좋아요, 고마워요.
    22.36s  user  발화 끝
    22.38s  agent 발화 시작: 도움이 되어서 기쁘네요.
    24.62s  agent 발화 끝
