# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 오션뷰 호텔, 샌디에이고에서 2월 10일부터 7박 3개 방 예약해 줘.
     4.45s  <ret> 발화 (turn1 첫 프레임)
     4.61s  agent 발화 시작: <ret> 네, 확인해 봤는데 예약 완료됐어요. 총 금액은 840달러예요.
     4.81s  user  발화 끝
     6.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.35s]: (tool result) Three rooms are reserved at Ocean View Hotel in San Dieg
    10.72s  agent 발화 끝
    11.53s  user  발화 시작: 어… 확인 메일 좀 보내 줄래?
    13.06s  <ret> 발화 (turn3 첫 프레임)
    13.38s  agent 발화 시작: <ret> 네, 그렇게 해 드릴게요. 예약 번호 92785번 확인 메일이 지금 인박스에 도착했을 거예요.
    13.60s  user  발화 끝
    14.02s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.41s]: (tool result) A confirmation email has been sent to user@example.com r
    19.69s  user  발화 시작: 좋아, 고마워. 근데… 그때 날씨는 어때?
    19.72s  agent 발화 끝
    22.77s  agent 발화 시작: 2월 샌디에이고 날씨는 보통 온화하고, 평균 최고 기온은 화씨 65도 정도예요.
    22.97s  user  발화 끝
    28.70s  agent 발화 끝
    29.04s  user  발화 시작: 그래. 그리고, 혹시 근처에 괜찮은 하이킹 코스 있어?
    33.22s  agent 발화 시작: 음… 현재 트레일 상태는 바로 확인하기 어려워요. 원하시면 찾아 드릴 수 있어요.
    33.43s  user  발화 끝
    38.64s  agent 발화 끝
    39.44s  user  발화 시작: 응, 부탁해.
    39.67s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Torrey Pines State Natural Reserve is two point five mil
    40.53s  user  발화 끝
    40.67s  agent 발화 시작: <ret> 오션뷰 호텔 근처 하이킹 코스를 찾아봤어요. 토리 파인스 주립 자연 보호 구역은 두 미반 정도 거
    50.69s  agent 발화 끝
