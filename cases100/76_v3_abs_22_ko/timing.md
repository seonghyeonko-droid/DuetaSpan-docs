# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "연서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-17",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     },
#     {
#       "date": "2026-06-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "child",
#       "text": "User has a child named Daniel, age 4."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "phone",
#       "text": "User uses an iPhone SE."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "allergy",
#       "text": "User is allergic to soy."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2025-12-24",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 켄트 지역에서 문화 및 학술 기관이 발전하기 시작하는 곳이 어 | S2 다른 지역은 글쎄… 서울에 괜찮은 스터디 카페 알아봐 줄 수  | S3 오, 강남이네. 가격대는 어느 정도 해? | S4 꽤 괜찮은 가격이네.

     0.00s  user  발화 시작: 켄트 지역에서 문화 및 학술 기관이 발전하기 시작하는 곳이 어디야?
     4.31s  <ret> 발화 (turn1 첫 프레임)
     4.79s  agent 발화 시작: <ret> 켄트 지역의 문화 및 학술 기관 개발 상황에 대한 정보는 아직 찾을 수 없네요. [sigh] 좀 
     5.00s  user  발화 끝
     5.23s  ⚡SPAN 주입 [d'=0.92s / d_lead=7.13s]: (no information found)
    11.92s  agent 발화 끝
    12.00s  user  발화 시작: 음.
    12.50s  agent 발화 시작: 혹시 다른 지역에 관심 있으신가요? 아니면 다른 종류의 기관에 대해 알아볼까요?
    12.63s  user  발화 끝
    15.23s  user  발화 시작: 응.
    15.63s  user  발화 끝
    16.99s  agent 발화 끝
    17.18s  user  발화 시작: 다른 지역은 글쎄… 서울에 괜찮은 스터디 카페 알아봐 줄 수 있어?
    19.48s  agent 발화 시작: 네.
    19.97s  agent 발화 끝
    20.91s  <ret> 발화 (turn7 첫 프레임)
    21.52s  agent 발화 시작: <ret> 서울에는 '스터디 룸'이라는 곳이 있는데, 강남구 테헤란로 사백이십칠번지 팔층에 있고 넓은 공간과
    21.54s  ⚡SPAN 주입 [d'=0.63s / d_lead=8.58s]: (tool result) 서울 강남구 테헤란로 427, 8층에 위치한 '스터디 룸'은 넓은 공간과 다양한 편의시설을 갖춘 스터
    21.76s  user  발화 끝
    30.09s  agent 발화 끝
    30.65s  user  발화 시작: 오, 강남이네. 가격대는 어느 정도 해?
    33.16s  <ret> 발화 (turn9 첫 프레임)
    33.34s  agent 발화 시작: <ret> 스터디 룸 강남점은 평일에 시간당 팔천원이고, 주말에는 일만원이라고 하네요. 룸 종류에 따라 가격
    33.56s  user  발화 끝
    34.31s  ⚡SPAN 주입 [d'=1.15s / d_lead=8.53s]: (tool result) 스터디 룸 강남점의 시간당 이용 요금은 평일 8,000원, 주말 10,000원입니다. 룸 종류에 따라
    41.62s  user  발화 시작: 꽤 괜찮은 가격이네.
    41.87s  agent 발화 끝
    43.01s  agent 발화 시작: 네, 그렇죠? 집중해서 공부할 수 있는 공간을 찾는 데 도움이 됐다니 기쁘네요.
    43.18s  user  발화 끝
    48.20s  agent 발화 끝
