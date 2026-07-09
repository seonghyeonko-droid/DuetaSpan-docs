# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 6월 15일에 방문 예약을 잡아줘. | S2 아, 정말? 그거 좋네. 혹시 반려동물 동반도 가능한가? | S3 음, 알겠어. 그럼 예약 확인 메시지를 문자로 보내줄 수 있을 | S4 빈 시인… 이름이 예쁘네.

     0.00s  user  발화 시작: 그랜드뷰 로프트에 6월 15일에 방문 예약을 잡아줘.
     3.73s  <ret> 발화 (turn1 첫 프레임)
     3.97s  agent 발화 시작: <ret> 네, 그랜드뷰 로프트 방문 예약 도와드릴게요. 6월 15일 오후 2시에 그랜드뷰 로프트 방문 예약
     4.07s  user  발화 끝
     5.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.15s]: (tool result) The Grandview Lofts visit is scheduled for June 15th, 20
    12.36s  agent 발화 끝
    13.65s  user  발화 시작: 응, 좋아. 근데 혹시… 16일로 바꿔줄 수 있어? 15일은 좀 어려울 것 같아— 16일이 더 좋을 것 같아
    19.76s  <ret> 발화 (turn3 첫 프레임)
    20.07s  agent 발화 시작: <ret> 네, 날짜 변경해 드릴게요. 그랜드뷰 로프트 방문 날짜를 6월 16일 오후 2시로 변경했습니다.
    20.31s  user  발화 끝
    20.56s  ⚡SPAN 주입 [d'=0.80s / d_lead=2.00s]: (tool result) The Grandview Lofts visit is scheduled for June 16th, 20
    24.46s  user  발화 시작: Yeah, yeah.
    25.27s  user  발화 끝
    26.56s  agent 발화 끝
    26.60s  agent 발화 시작: 혹시 다른 특별 요청 사항은 없으신가요?
    28.08s  user  발화 시작: Right.
    28.57s  user  발화 끝
    29.38s  user  발화 시작: 음… 그 건물에 주차 공간이 있는지 알려줄 수 있어?
    29.50s  agent 발화 끝
    32.70s  <ret> 발화 (turn8 첫 프레임)
    33.09s  agent 발화 시작: <ret> 건물 주차 공간에 대해 알아볼게요. 그랜드뷰 로프트는 방문객에게 무료 발레 파킹 서비스를 제공합니
    33.31s  user  발화 끝
    33.98s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.99s]: (tool result) The Grandview Lofts offers complimentary valet parking f
    40.88s  agent 발화 끝
    40.91s  user  발화 시작: 아, 정말? 그거 좋네. 혹시 반려동물 동반도 가능한가?
    44.53s  <ret> 발화 (turn10 첫 프레임)
    44.84s  agent 발화 시작: <ret> 반려동물 동반 정책에 대해 알아봐 드릴게요.
    44.98s  user  발화 끝
    45.73s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.32s]: (tool result) The Grandview Lofts allows pets under 25 pounds with a o
    48.08s  agent 발화 시작: 그랜드뷰 로프트는 25파운드 이하의 반려동물 동반이 가능하며, 1회 100달러의 수수료가 부과됩니다.
    48.16s  agent 발화 끝
    55.46s  agent 발화 끝
    55.82s  user  발화 시작: [curious] 25파운드면… 한 11킬로그램 정도 되나?
    59.51s  user  발화 끝
    59.68s  agent 발화 시작: 네, 대략 11킬로그램 정도 됩니다.
    62.12s  agent 발화 끝
    62.17s  user  발화 시작: 음, 알겠어. 그럼 예약 확인 메시지를 문자로 보내줄 수 있을까?
    67.09s  <ret> 발화 (turn15 첫 프레임)
    67.17s  user  발화 끝
    67.41s  agent 발화 시작: <ret> 예약 확인 메시지를 문자로 보내드릴게요. 6월 16일 그랜드뷰 로프트 방문 예약 확인 메시지를 0
    68.29s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.56s]: (tool result) Confirmation SMS sent to +821099998888 regarding The Gra
    77.90s  user  발화 시작: 고마워. 혹시 그 근처에 괜찮은 카페도 추천해 줄 수 있어?
    78.08s  agent 발화 끝
    81.51s  <ret> 발화 (turn17 첫 프레임)
    81.72s  agent 발화 시작: <ret> 그 근처 카페를 찾아볼게요.
    81.74s  user  발화 끝
    82.95s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.21s]: (tool result) "Bean Scene" cafe is 0.3 miles from The Grandview Lofts,
    83.78s  agent 발화 시작: 그랜드뷰 로프트에서 0.3마일 거리에 별점 4.5점의 "빈 시인" 카페가 있습니다.
    83.94s  agent 발화 끝
    86.28s  user  발화 시작: Mm-hmm.
    86.91s  user  발화 끝
    89.81s  agent 발화 끝
    90.19s  user  발화 시작: 빈 시인… 이름이 예쁘네.
    92.70s  agent 발화 시작: [happy] 네, 이름이 예쁘죠. 혹시 다른 도움이 필요하신가요?
    92.77s  user  발화 끝
    94.14s  user  발화 시작: Mhm.
    94.96s  user  발화 끝
    96.53s  agent 발화 끝
    96.54s  user  발화 시작: 아니, 괜찮아. 오늘 정말 고마웠어.
    99.77s  user  발화 끝
    99.78s  agent 발화 시작: 천만에요. 언제든지 편하게 연락 주세요. 새로운 시작을 응원합니다.
   104.50s  agent 발화 끝
