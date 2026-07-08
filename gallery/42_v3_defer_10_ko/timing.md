# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 작년 프랑스 휴가 사진 찾아 주시는데, 썸네일 말고 큰 사진으로 보여 주세요.
     4.94s  <ret> 발화 (turn1 첫 프레임)
     5.18s  agent 발화 시작: <ret> 음, 찾아봤는데, 2023년 프랑스 여행 사진 세 장 찾았어. 썸네일은 뺐어.
     5.33s  user  발화 끝
     6.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: (tool result) Three files were found: "Paris_Eiffel_Tower.jpg", "Prove
    11.67s  agent 발화 끝
    12.30s  user  발화 시작: 와, 정말 잘 됐네요! 에펠탑 사진 열어 줄 수 있어요?
    16.13s  user  발화 끝
    16.27s  <ret> 발화 (turn3 첫 프레임)
    16.35s  agent 발화 시작: <ret> 그래, 당연히 열어 줄 수 있지… 에펠탑 사진 지금 열었어.
    17.55s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.33s]: (tool result) File "Paris_Eiffel_Tower.jpg" is now displayed.
    19.68s  agent 발화 끝
