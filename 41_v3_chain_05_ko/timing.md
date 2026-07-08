# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 전쟁 영화 찾아봐.
     1.68s  agent 발화 시작: <ret> 음, 괜찮은 전쟁 영화 몇 편이 있어. “세이빙 프라이빗 라이언”, “지옥의 묵시록”, “더 허트
     1.68s  <ret> 발화 (turn1 첫 프레임)
     1.68s  user  발화 끝
     2.68s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.24s]: (tool result: title=“Saving Private Ryan”, year=1998, genre=“War”, rat
    11.76s  user  발화 시작: “지옥의 묵시록” 상영 시간은 얼마야?
    11.76s  agent 발화 끝
    14.55s  agent 발화 시작: <ret> 그거 완전 명작이지. “지옥의 묵시록” 상영 시간은 147분이야.
    14.55s  <ret> 발화 (turn3 첫 프레임)
    14.55s  user  발화 끝
    15.55s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.24s]: (tool result: title=“Apocalypse Now”, year=1979, genre=“War”, rating=8
    19.03s  user  발화 시작: 근처에서 상영 시간 찾아줄 수 있어?
    19.03s  agent 발화 끝
    22.39s  agent 발화 시작: <ret> 당연하지. “지옥의 묵시록”은 AMC 보스턴 코먼 19에서 오후 2시 15분에, Regal Fen
    22.39s  <ret> 발화 (turn5 첫 프레임)
    22.39s  user  발화 끝
    22.63s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.56s]: (tool result: movie_title=“Apocalypse Now”, theater=“AMC Boston Common
    30.79s  user  발화 시작: Regal Fenway에서 7시 표 예매해 줘.
    30.79s  agent 발화 끝
    34.15s  agent 발화 시작: <ret> 알았어. “지옥의 묵시록” Regal Fenway 7시 표 예매 완료됐고, 확인 번호는 AX49Z
    34.15s  <ret> 발화 (turn7 첫 프레임)
    34.15s  user  발화 끝
    35.15s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.68s]: (tool result: movie_title=“Apocalypse Now”, theater=“Regal Fenway”, ti
    41.98s  agent 발화 끝
