# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 유로비전 2017년 영국 점수를 여쭤보셨죠?
     3.11s  <ret> 발화 (turn1 첫 프레임)
     3.35s  agent 발화 시작: <ret> 네, 2017년 유로비전 대회에서 영국은 총 일백십일 점을 받았어요.
     3.55s  user  발화 끝
     3.61s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.96s]: The United Kingdom received one hundred and eleven points at the Eurov
     8.30s  agent 발화 끝
