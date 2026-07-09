# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 6월 15일에 그랜드뷰 로프트에서 보여주시면 될까요? | S2 그랜드뷰 로프트에 주차 공간이 있나요? | S3 스시젠이 괜찮겠네요. 전화번호가 어떻게 되나요? | S4 네, 그게… 잘못된 결정을 내리지 않을까 걱정돼요.

     0.00s  user  발화 시작: 6월 15일에 그랜드뷰 로프트에서 보여주시면 될까요?
     2.96s  <ret> 발화 (turn1 첫 프레임)
     3.20s  agent 발화 시작: <ret> 응, 6월 15일 오후 2시에 보여주는 걸로 예약됐어.
     3.33s  user  발화 끝
     4.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.52s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     7.22s  agent 발화 끝
     7.58s  user  발화 시작: 아, 그게… 사실 6월 16일이 더 괜찮을 것 같아요.
    11.12s  <ret> 발화 (turn3 첫 프레임)
    11.44s  agent 발화 시작: <ret> 아무 문제 없어, 날짜 바꿔줄게. 좋아, 6월 16일 오전 10시에 보여주는 걸로 예약됐어.
    11.60s  user  발화 끝
    13.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.38s]: (tool result) A viewing at The Grandview Lofts is scheduled for June s
    15.03s  user  발화 시작: 네.
    15.67s  user  발화 끝
    18.43s  agent 발화 끝
    18.87s  user  발화 시작: 그랜드뷰 로프트에 주차 공간이 있나요?
    21.14s  <ret> 발화 (turn6 첫 프레임)
    21.29s  agent 발화 시작: <ret> 미리 알아봐 두는 게 좋지. 응, 현장 주차장이 있고, 시간당 10달러야.
    21.50s  user  발화 끝
    22.18s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.27s]: (tool result) The Grandview Lofts offers on-site parking with a fee of
    26.28s  user  발화 시작: 알겠습니다. 근처에 식당은 어떤 곳들이 있나요?
    26.43s  agent 발화 끝
    29.16s  <ret> 발화 (turn8 첫 프레임)
    29.23s  agent 발화 시작: <ret> 주변 식당을 알아봐 두는 것도 좋은 생각이야. 근처에 세 군데 있는데, 벨라 이탈리아, 스시젠, 
    29.42s  user  발화 끝
    29.80s  ⚡SPAN 주입 [d'=0.64s / d_lead=3.18s]: (tool result) Three restaurants are near The Grandview Lofts: Bella It
    33.90s  user  발화 시작: 음.
    34.31s  user  발화 끝
    37.85s  agent 발화 끝
    38.10s  user  발화 시작: 스시젠이 괜찮겠네요. 전화번호가 어떻게 되나요?
    40.91s  <ret> 발화 (turn11 첫 프레임)
    41.23s  agent 발화 시작: <ret> 바로 찾아볼게. 전화번호는 555-123-4567이야.
    41.33s  user  발화 끝
    42.43s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.18s]: (tool result) Sushi Zen’s phone number is 555-123-4567.
    46.41s  agent 발화 끝
    47.75s  user  발화 시작: 음… 이사하는 과정이 좀 불안하네요.
    50.77s  agent 발화 시작: 큰 변화에는 불안한 감정을 느끼는 건 당연해. 인생에서 중요한 변화이고, 그런 감정을 인정하는 게 괜찮아.
    50.94s  user  발화 끝
    58.05s  user  발화 시작: 네, 그게… 잘못된 결정을 내리지 않을까 걱정돼요.
    58.09s  agent 발화 끝
    61.25s  agent 발화 시작: 그건 흔히 있는 걱정이고, 그런 걸 인지하는 게 좋아. 네가 생각하는 “잘못된” 게 뭔지, 그리고 네가 원하
    61.27s  user  발화 끝
    70.33s  user  발화 시작: [laugh] 그냥… 너무 많아요.
    70.43s  agent 발화 끝
    73.75s  user  발화 끝
    73.77s  agent 발화 시작: 정말 많지, 근데 이렇게 얘기하는 거 보니까 잘하고 있어. 보여주는 걸 예약하는 것처럼 하나씩 해나가면 좀 
    81.84s  agent 발화 끝
