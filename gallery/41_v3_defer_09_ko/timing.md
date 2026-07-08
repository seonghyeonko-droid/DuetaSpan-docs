# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 오션뷰 호텔 샌디에이고에 2월 10일부터 7박 3개 방 예약해 줘.
     4.01s  <ret> 발화 (turn1 첫 프레임)
     4.17s  agent 발화 시작: <ret> 네, 거기 방 있는지 알아볼게요. 오션뷰 호텔에 원하시는 날짜에 방 3개가 남아있습니다.
     4.35s  user  발화 끝
     5.46s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.01s]: (tool result) Three rooms are available at Ocean View Hotel in San Die
    10.20s  agent 발화 끝
    11.00s  user  발화 시작: 좋은데… 총 얼마야?
    13.13s  agent 발화 시작: 잠시만 확인해 볼게요.
    13.26s  user  발화 끝
    14.29s  user  발화 시작: 알았어. 그거 하는 김에 호텔에 대해서 좀 알려 줘.
    14.36s  agent 발화 끝
    16.50s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Ocean View Hotel has an outdoor pool, a fitness center, 
    17.44s  agent 발화 시작: <ret> 음, 호텔 편의시설에 대해서 말씀드릴게요… 오션뷰 호텔에는 수영장, 피트니스 센터가 있고, 투숙객
    17.67s  user  발화 끝
    27.40s  agent 발화 끝
