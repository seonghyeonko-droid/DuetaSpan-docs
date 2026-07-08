# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: How many points did the uk get in eurovision 2017?
     3.03s  <ret> 발화 (turn1 첫 프레임)
     3.63s  agent 발화 시작: <ret> Let me quickly check the official results for that yea
     3.79s  user  발화 끝
     5.75s  ⚡SPAN 주입 [d'=2.72s / d_lead=4.19s]: The United Kingdom received one hundred and eleven points at the Eurov
    13.27s  agent 발화 끝
