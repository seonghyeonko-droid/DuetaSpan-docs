# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 작년 프랑스 휴가 사진 찾아 주시는데, 썸네일 말고 큰 사진으로 보여 주세요.
     4.91s  <ret> 발화 (turn1 첫 프레임)
     4.98s  agent 발화 시작: <ret> 음, 프랑스 휴가 사진 세 장 찾았어. 파리, 프로방스, 그리고 니스야.
     5.00s  user  발화 끝
     6.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: (tool result) Three files were found: "Paris_EiffelTower.jpg", "Proven
     8.10s  user  발화 시작: 네.
     8.50s  user  발화 끝
     9.98s  user  발화 시작: 사라에게 "Paris_EiffelTower.jpg" 사진을 보내 줄 수 있을까요?
    10.13s  agent 발화 끝
    13.83s  <ret> 발화 (turn4 첫 프레임)
    14.06s  agent 발화 시작: <ret> 그래, 사라한테 에펠탑 사진 보냈어. Sarah@email.com으로 보냈어.
    14.23s  user  발화 끝
    14.95s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.53s]: (tool result) The file "Paris_EiffelTower.jpg" was successfully sent t
    18.59s  agent 발화 끝
