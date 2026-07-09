# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 위치 좀 알려 줘. | S2 좀 더 싼 데 없어? | S3 대중교통이 괜찮겠어. 예약을 좀— | S4 아니, 괜찮아. 그럼 예약해 줘.

     0.00s  user  발화 시작: 위치 좀 알려 줘.
     1.12s  <ret> 발화 (turn1 첫 프레임)
     1.28s  agent 발화 시작: <ret> 네, 그 유명한 랜드마크의 위치를 찾아 드릴게요— 위도는 -33.8568이고 경도는 151.215
     1.29s  user  발화 끝
     3.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: (tool result) The Sydney Opera House is located at -33.8568° latitude 
     6.23s  user  발화 시작: 와.
     7.04s  user  발화 끝
    10.74s  agent 발화 끝
    11.10s  user  발화 시작: 그거 괜찮네. 근처 호텔 좀 찾아 줘.
    14.01s  <ret> 발화 (turn4 첫 프레임)
    14.16s  agent 발화 시작: <ret> 네, 근처 숙소를 검색해 드릴 수 있어요— 파크 하얏트 시드니는 별점 4.5개이고, 1박에 520
    14.20s  user  발화 끝
    16.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.33s]: (tool result) The Park Hyatt Sydney has a rating of 4.5 stars and cost
    22.35s  user  발화 시작: 좀 더 싼 데 없어?
    22.83s  agent 발화 끝
    23.39s  <ret> 발화 (turn6 첫 프레임)
    23.73s  user  발화 끝
    23.78s  agent 발화 시작: <ret> 네, 좀 더 저렴한 가격으로 검색해 볼게요— 러셀 호텔은 별점 4.0개이고, 1박에 280달러입니
    25.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: (tool result) The Russell Hotel has a rating of 4.0 stars and costs $2
    28.72s  user  발화 시작: 그니까.
    29.26s  user  발화 끝
    31.66s  agent 발화 끝
    31.69s  user  발화 시작: 음, 그게 더 나은 것 같아. 공항에서 거기로 가는 가장 좋은 방법은 뭐야?
    36.34s  <ret> 발화 (turn9 첫 프레임)
    36.50s  agent 발화 시작: <ret> 네, 공항에서 가장 빠른 경로를 찾아 드릴게요— 자동차로는 20분, 25달러이고, 대중교통은 30
    36.64s  user  발화 끝
    38.26s  ⚡SPAN 주입 [d'=1.92s / d_lead=5.87s]: (tool result) Driving takes 20 minutes and costs $25, while public tra
    39.04s  user  발화 시작: 응.
    39.63s  user  발화 끝
    44.98s  agent 발화 끝
    46.01s  user  발화 시작: 대중교통이 괜찮겠어. 예약을 좀—
    48.97s  user  발화 끝
    49.06s  agent 발화 시작: 네, 물론 도와드릴 수 있지만—
    50.92s  user  발화 시작: 근데 예약하기 전에, 많이 걸어야 해?
    51.65s  agent 발화 끝
    53.38s  <ret> 발화 (turn14 첫 프레임)
    53.70s  agent 발화 시작: <ret> 네, 고려해야 할 좋은 질문이에요— 대중교통 경로에는 15분 정도 걸어야 합니다.
    53.88s  user  발화 끝
    54.58s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.45s]: (tool result) The public transport route involves 15 minutes of walkin
    55.85s  user  발화 시작: 응.
    56.16s  user  발화 끝
    59.02s  agent 발화 시작: 그 점을 아시면 편안한 여행이 될 거예요— 필요하시면 다른 옵션을 찾아볼 수도 있습니다.
    59.11s  agent 발화 끝
    64.44s  agent 발화 끝
    64.83s  user  발화 시작: 아니, 괜찮아. 그럼 예약해 줘.
    66.82s  <ret> 발화 (turn18 첫 프레임)
    66.98s  agent 발화 시작: <ret> 네, 대중교통 예약을 확인해 드릴게요— 티켓이 예약되었습니다. 확인 번호는 AX927B입니다.
    67.09s  user  발화 끝
    68.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: (tool result) Your public transport ticket is booked, confirmation num
    73.93s  agent 발화 끝
