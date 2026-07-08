# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 시애틀에서 포틀랜드 가는 3월 10일 버스 시간표를 한 사람 기준으로 알려드릴게요.
     6.63s  agent 발화 시작: <ret> 네, 확인해 봤는데, 버스는 시애틀에서 오전 8시 15분에 출발해서 포틀랜드에 낮 12시 47분에
     6.63s  <ret> 발화 (turn1 첫 프레임)
     6.63s  user  발화 끝
     6.79s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.55s]: Departure time: 8:15 AM. Arrival time: 12:47 PM. Price: fifty-five dol
    15.46s  user  발화 시작: 음, 좀 이르네요. 더 늦게 가는 버스가 있나요?
    15.46s  agent 발화 끝
    19.88s  agent 발화 시작: <ret> 잠깐만 찾아볼게요. 오후 3시 47분에 출발해서 밤 8시 29분에 도착하는 버스가 있고, 요금은 
    19.88s  <ret> 발화 (turn3 첫 프레임)
    19.88s  user  발화 끝
    20.04s  ⚡SPAN 주입 [d'=0.16s / d_lead=1.66s]: Departure time: 3:47 PM. Arrival time: 8:29 PM. Price: sixty-two dolla
    27.61s  user  발화 시작: 알겠습니다. 오후 3시 47분 버스 티켓 예매해 주세요.
    27.61s  agent 발화 끝
    32.03s  agent 발화 시작: <ret> 네, 예매 완료됐습니다. 승객 한 명, 버스 71X, 확인 번호는 G749L입니다.
    32.03s  <ret> 발화 (turn5 첫 프레임)
    32.03s  user  발화 끝
    32.43s  ⚡SPAN 주입 [d'=0.40s / d_lead=0.55s]: Confirmation number: G749L. Passenger: one. Bus ID: 71X. Date: March t
    38.10s  user  발화 시작: 잘 됐네요. 신기하게도 간단한 시간표 같은 건 쉽게 잊어버리게 되죠…[sigh]
    38.10s  agent 발화 끝
    43.62s  agent 발화 시작: 사람의 뇌는 정보를 우선순위에 따라 처리하는 능력이 뛰어나서, 시간 같은 정확한 세부 사항은 놓치는 경우가 
    43.62s  user  발화 끝
    56.32s  agent 발화 끝
