# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 내 user agent을 MyCustomBrowser 버전 십 점 오로 설정해 줘.
     4.68s  user  발화 끝
     4.93s  <ret> 발화 (turn1 첫 프레임)
     5.00s  agent 발화 시작: <ret> 알았어, 브라우저 설정을 바꿔줄게. user agent은 MyCustomBrowser, 버전 십 
     6.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
    11.49s  agent 발화 끝
    11.59s  user  발화 시작: 파리 시간은 지금 몇 시야?
    12.76s  <ret> 발화 (turn3 첫 프레임)
    13.15s  user  발화 끝
    13.15s  agent 발화 시작: <ret> 잠깐만 파리 시간을 확인해 볼게. 지금 파리는 오전 열 시 이십이 분이야.
    13.48s  ⚡SPAN 주입 [d'=0.72s / d_lead=3.89s]: (tool result) The current time in Paris is 10:22 AM.
    18.09s  user  발화 시작: 에펠탑 근처에 빵집 좀 찾아줘.
    18.34s  agent 발화 끝
    20.59s  <ret> 발화 (turn5 첫 프레임)
    20.91s  agent 발화 시작: <ret> 당연하지, 근처 빵집을 검색해 볼게. Boulangerie Utopie가 에펠탑에서 쩜 팔 킬로미
    20.95s  user  발화 끝
    22.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.36s]: (tool result) Boulangerie Utopie is 0.8 kilometers from the Eiffel Tow
    27.88s  user  발화 시작: 거기서 두 명 자리 오전 열한 시에 예약해 줄 수 있어?
    28.00s  agent 발화 끝
    31.81s  user  발화 끝
    32.06s  agent 발화 시작: 예약 가능한지 알아볼게.
    33.94s  agent 발화 끝
