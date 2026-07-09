# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 6월 15일에 그랜드뷰 로프트에서 보여주실 수 있나요? | S2 그 건물에 주차 공간이 있나요? | S3 8달러… 좀 비싸네요. 걸어서 갈 수 있는 더 저렴한 곳이 있 | S4 좋아요. 이제 다 된 것 같아요.

     0.00s  user  발화 시작: 6월 15일에 그랜드뷰 로프트에서 보여주실 수 있나요?
     3.84s  user  발화 끝
     3.84s  <ret> 발화 (turn1 첫 프레임)
     4.07s  agent 발화 시작: <ret> 좋아, 6월 15일 오후 2시에 그랜드뷰 로프트 보여주는 걸로 예약됐어.
     5.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.63s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     9.26s  agent 발화 끝
     9.51s  user  발화 시작: 괜찮은데… 6월 16일이 더 좋을 것 같아.
    12.47s  <ret> 발화 (turn3 첫 프레임)
    12.71s  agent 발화 시작: <ret> 아무 문제 없어, 바꿔줄게. 그랜드뷰 로프트 보여주는 걸 6월 16일 오전 10시로 다시 예약했어
    12.88s  user  발화 끝
    13.67s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.44s]: (tool result) A viewing at The Grandview Lofts is scheduled for June s
    16.27s  user  발화 시작: 네.
    16.66s  user  발화 끝
    19.61s  agent 발화 끝
    19.62s  user  발화 시작: 그 건물에 주차 공간이 있나요?
    21.62s  agent 발화 시작: 그랜드뷰 로프트는 길가 주차랑 근처 유료 주차장을 둘 다 이용할 수 있어.
    21.67s  user  발화 끝
    27.59s  agent 발화 끝
    28.05s  user  발화 시작: 그 주차장의 시간당 요금은 얼마예요?
    30.27s  <ret> 발화 (turn8 첫 프레임)
    30.66s  agent 발화 시작: <ret> 잠깐만, 지금 요금 확인해 볼게. 그랜드뷰 로프트 주차장의 시간당 요금은 현재 8달러야.
    30.82s  user  발화 끝
    32.03s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.22s]: (tool result) The Grandview Lofts Garage charges eight dollars per hou
    34.44s  user  발화 시작: 음.
    34.65s  user  발화 끝
    37.50s  user  발화 시작: 8달러… 좀 비싸네요. 걸어서 갈 수 있는 더 저렴한 곳이 있나요?
    37.62s  agent 발화 끝
    41.81s  <ret> 발화 (turn11 첫 프레임)
    42.05s  agent 발화 시작: <ret> 당연하지, 찾아볼까. 시티 센터 파킹은 5분 거리에 있고 시간당 5달러야.
    42.08s  user  발화 끝
    43.49s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.26s]: (tool result) City Center Parking is a five-minute walk and charges fi
    47.37s  agent 발화 끝
    48.71s  user  발화 시작: 5달러가 훨씬 좋네요. 내일 오전 10시에 자리가 있는지 확인해 줄 수 있나요?
    54.11s  <ret> 발화 (turn13 첫 프레임)
    54.17s  user  발화 끝
    54.27s  agent 발화 시작: <ret> 그래, 확인해 볼게. 시티 센터 파킹은 내일 오전 10시에 20자리나 남아 있어.
    54.83s  ⚡SPAN 주입 [d'=0.72s / d_lead=3.74s]: (tool result) City Center Parking has twenty spaces available at ten A
    59.88s  agent 발화 끝
    60.19s  user  발화 시작: 좋아요. 이제 다 된 것 같아요.
    62.77s  user  발화 끝
    63.05s  agent 발화 시작: 잘 됐네! 보여주는 거 준비도 잘 됐고, 주차 계획도 세웠고. 아주 꼼꼼하다.
    68.74s  agent 발화 끝
