# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도는 어떻게 돼? | S2 가격대는 어때? | S3 혹시 해산물 전문인가? | S4 고마워.

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도는 어떻게 돼?
     3.16s  <ret> 발화 (turn1 첫 프레임)
     3.23s  agent 발화 시작: <ret> 시드니 오페라 하우스의 좌표를 알려드릴게요. 시드니 오페라 하우스는 위도 마이너스 삼십삼 점 팔오
     3.36s  user  발화 끝
     4.36s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.52s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
     7.35s  user  발화 시작: Yeah.
     7.99s  user  발화 끝
    12.79s  agent 발화 끝
    12.81s  user  발화 시작: 그 근처에 괜찮은 레스토랑 있어?
    15.09s  <ret> 발화 (turn4 첫 프레임)
    15.17s  user  발화 끝
    15.49s  agent 발화 시작: <ret> 네, 주변 레스토랑을 검색해 드릴까요?
    16.37s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.25s]: (tool result) Aria Restaurant is 0.5 km from the Sydney Opera House an
    17.71s  agent 발화 시작: 아리아 레스토랑이 시드니 오페라 하우스에서 킬로미터 0.5 떨어진 곳에 있고, 평점은 4.6점입니다.
    17.74s  agent 발화 끝
    24.84s  agent 발화 끝
    24.94s  user  발화 시작: 가격대는 어때?
    26.54s  user  발화 끝
    26.57s  agent 발화 시작: 아리아 레스토랑의 가격대는—
    27.74s  user  발화 시작: 혹시 해산물 전문인가?
    28.23s  agent 발화 끝
    29.32s  <ret> 발화 (turn9 첫 프레임)
    29.47s  agent 발화 시작: <ret> 아, 아리아 레스토랑은 현대 호주 요리를 전문으로 합니다.
    29.67s  user  발화 끝
    31.16s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.56s]: (tool result) Aria Restaurant serves modern Australian cuisine and spe
    33.03s  agent 발화 끝
    33.09s  agent 발화 시작: 아리아 레스토랑은 현대 호주 요리를 선보이고, 특히 해산물 요리가 유명합니다.
    35.09s  user  발화 시작: Yeah.
    35.58s  user  발화 끝
    37.89s  <ret> 발화 (turn12 첫 프레임)
    37.99s  agent 발화 끝
    38.05s  agent 발화 시작: <ret> 예약 가능한 시간도 확인해 드릴까요? 보통 저녁 식사는 빨리 마감됩니다.
    39.73s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.32s]: (tool result) Aria Restaurant has availability at 7:30 PM and 9:00 PM 
    43.38s  agent 발화 끝
    43.49s  agent 발화 시작: 오늘 아리아 레스토랑은 저녁 일곱 시 반과 아홉 시에 두 분을 위한 자리가 있습니다.
    48.43s  user  발화 시작: 일곱 시 반으로 예약해 줘.
    48.48s  agent 발화 끝
    50.13s  <ret> 발화 (turn15 첫 프레임)
    50.36s  user  발화 끝
    50.37s  agent 발화 시작: <ret> 네, 아리아 레스토랑에 오늘 저녁 일곱 시 반, 두 분으로 예약 진행하겠습니다.
    52.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: (tool result) Reservation confirmed at Aria Restaurant for today at 7:
    56.02s  agent 발화 끝
    56.14s  agent 발화 시작: 아리아 레스토랑에 오늘 저녁 일곱 시 반, 두 분 예약이 확정되었습니다. 확인 번호는 AR12345입니다.
    61.11s  user  발화 시작: Right.
    61.51s  user  발화 끝
    63.92s  agent 발화 끝
    65.16s  user  발화 시작: 고마워.
    65.99s  user  발화 끝
