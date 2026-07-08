# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 6월 15일에 그랜드뷰 로프트에서 보여주시면 될까요?
     3.25s  <ret> 발화 (turn1 첫 프레임)
     3.41s  agent 발화 시작: <ret> 응, 6월 15일 오후 두 시에 방문 예약을 했어.
     3.56s  user  발화 끝
     4.93s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.33s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     6.73s  agent 발화 끝
     6.79s  user  발화 시작: 그날 가장 빠른 시간이에요?
     8.41s  <ret> 발화 (turn3 첫 프레임)
     8.72s  user  발화 끝
     8.81s  agent 발화 시작: <ret> 잠깐만, 그 부동산의 예약 가능 시간을 확인해 볼게. 6월 15일에 오전 열 시, 정오, 오후 두
    10.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.81s]: (tool result) The Grandview Lofts has viewings available at ten AM, no
    17.25s  user  발화 시작: 사실, 오후 늦게로 좀 미뤄 줄 수 있을까요— 그러니까, 가장 늦은 시간으로요?
    17.71s  agent 발화 끝
    22.28s  <ret> 발화 (turn5 첫 프레임)
    22.60s  agent 발화 시작: <ret> 물론이지, 가장 늦은 시간을 찾아 줄게. 가장 늦은 예약 시간은 6월 15일 오후 두 시야.
    22.66s  user  발화 끝
    24.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.13s]: (tool result) The Grandview Lofts has viewings available at ten AM, no
    30.30s  agent 발화 끝
    31.28s  user  발화 시작: 좋아요. 그리고 그랜드뷰 로프트 가는 길을 알려 줄 수 있어요?
    34.90s  <ret> 발화 (turn7 첫 프레임)
    35.14s  agent 발화 시작: <ret> 응, 알려 줄게. 엘름 스트리트를 북쪽으로 가다가 오크 애비뉴에서 오른쪽으로 꺾어.
    35.26s  user  발화 끝
    36.66s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.74s]: (tool result) Directions to The Grandview Lofts are: head north on Elm
    41.02s  agent 발화 끝
    41.06s  user  발화 시작: 그렇게 간단하군요. 그곳의 임대 신청 절차는 어떤가요?
    44.58s  agent 발화 시작: 신청 절차는 보통 신용 조회와 소득 증명을 포함해.
    44.67s  user  발화 끝
    48.73s  agent 발화 끝
    49.04s  user  발화 시작: 신청 수수료가 있나요?
    50.97s  user  발화 끝
    51.02s  <ret> 발화 (turn11 첫 프레임)
    51.10s  agent 발화 시작: <ret> 그랜드뷰 로프트의 신청 수수료를 찾아 볼게. 신청 수수료는 오십 달러야.
    52.94s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.59s]: (tool result) The application fee for The Grandview Lofts is fifty dol
    55.63s  user  발화 시작: 오십 달러— 그건 좀—
    55.68s  agent 발화 끝
    57.11s  agent 발화 시작: 이 지역의 부동산에서는 흔히 있는 가격이야, 감안하면—
    57.28s  user  발화 끝
    61.27s  user  발화 시작: 만약 제 소득이 기준보다 약간 낮으면 보증인이 필요한가요?
    61.92s  agent 발화 끝
    65.76s  user  발화 끝
    65.80s  agent 발화 시작: 소득이 기준에 미치지 못하면 보증인이 필요할 수도 있어. 구체적인 상황에 따라 달라져.
    71.72s  user  발화 시작: 알겠습니다. 주차는요? 주차장이 포함되어 있나요?
    71.72s  agent 발화 끝
    74.89s  <ret> 발화 (turn17 첫 프레임)
    75.29s  agent 발화 시작: <ret> 그랜드뷰 로프트의 주차 상황을 확인해 볼게. 주차는 한 달에 칠십오 달러야.
    75.32s  user  발화 끝
    76.33s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.95s]: (tool result) Parking at The Grandview Lofts is available for seventy-
    79.59s  user  발화 시작: 한 달에 칠십오 달러나 하네? 좀 비싸네요.
    79.64s  agent 발화 끝
    82.48s  agent 발화 시작: 거기는 좋은 위치라서, 그 비용이 반영되는 경우가 많아.
    82.55s  user  발화 끝
    86.78s  agent 발화 끝
    87.20s  user  발화 시작: 맞아요. 그랜드뷰 로프트에 반려동물을 키울 수 있나요?
    90.32s  <ret> 발화 (turn21 첫 프레임)
    90.40s  agent 발화 시작: <ret> 그 건물에 대한 반려동물 정책을 알아 볼게. 고양이와 작은 개는 삼백 달러의 수수료를 내면 허용돼
    90.43s  user  발화 끝
    91.76s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.17s]: (tool result) The Grandview Lofts allows cats and small dogs with a on
    97.45s  agent 발화 끝
    97.62s  user  발화 시작: 삼백 달러… 알겠습니다. 임대 조건은 어떤가요?
   101.84s  agent 발화 시작: 보통 임대 기간은 12개월인데, 6개월 옵션을 제공하는 경우도 있어.
   101.96s  user  발화 끝
   106.24s  agent 발화 끝
