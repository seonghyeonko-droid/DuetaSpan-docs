# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "보원",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-04",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-11-29",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-16",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-17",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 새로운 도시에 정착하는 거, 진짜 막막하네요. | S2 음… 강남역 근처면 좋을 것 같아요. | S3 사진 보여주세요. | S4 앤트러사이트 커피 로스터스… 가볼 만하겠네요.

     0.00s  user  발화 시작: 음… 새로운 도시에 정착하는 거, 진짜 막막하네요.
     3.33s  agent 발화 시작: 새로운 도시에서의 정착을 도와드릴 수 있어요. 어떤 점이 가장 걱정되세요?
     3.56s  user  발화 끝
     7.81s  user  발화 시작: 일단 집을 구하는 게…
     7.91s  agent 발화 끝
     9.93s  user  발화 끝
    11.03s  user  발화 시작: …제일 큰 문제인 것 같아요.
    12.35s  agent 발화 시작: 집을 구하는 건 중요한 첫걸음이죠. 혹시 선호하는 지역이 있으세요?
    12.55s  user  발화 끝
    16.66s  user  발화 시작: 음… 강남역 근처면 좋을 것 같아요.
    16.70s  agent 발화 끝
    18.70s  <ret> 발화 (turn6 첫 프레임)
    19.09s  agent 발화 시작: <ret> 강남역 근처에 월세 백오십만 원에서 사백만 원 사이의 집이 십이채 있어요. 괜찮은 곳을 찾아드릴 
    19.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.27s]: (tool result) Hotels_2 SearchHouse returned 12 houses near Gangnam Sta
    19.20s  user  발화 끝
    24.09s  user  발화 시작: 음.
    24.48s  user  발화 끝
    26.36s  agent 발화 끝
    27.40s  user  발화 시작: 백오십만 원 정도면 괜찮을 것 같은데…
    30.25s  user  발화 끝
    30.62s  agent 발화 시작: 백오십만 원으로 가능한 집들을 더 자세히 알아볼까요?
    33.76s  agent 발화 끝
    33.79s  user  발화 시작: 네, 부탁드려요.
    34.84s  <ret> 발화 (turn11 첫 프레임)
    34.99s  agent 발화 시작: <ret> 강남역 근처에서 백오십만 원 이하의 집은 오채가 있어요. 테헤란로 구십구길에 있는 스튜디오 아파트
    35.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.45s]: (tool result) Hotels_2 SearchHouse returned 5 houses near Gangnam Stat
    35.16s  user  발화 끝
    41.21s  user  발화 시작: 응.
    41.51s  user  발화 끝
    44.45s  agent 발화 끝
    44.54s  user  발화 시작: 사진 보여주세요.
    45.87s  agent 발화 시작: 지금 바로 사진을 보여드릴게요. 잠시만 기다려 주세요.
    45.93s  user  발화 끝
    49.30s  agent 발화 시작: 그 집은 역에서 도보로 십분 거리에 있고—
    49.43s  agent 발화 끝
    51.29s  user  발화 시작: …혹시 그 근처에 괜찮은 카페도 있을까요?
    52.07s  agent 발화 끝
    54.12s  <ret> 발화 (turn17 첫 프레임)
    54.30s  user  발화 끝
    54.43s  agent 발화 시작: <ret> 강남역 근처에 카페는 스물세곳이 있어요. 커피빈과 스타벅스도 있습니다. 어떤 스타일의 카페를 좋아
    54.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: (tool result) Restaurants_2 FindRestaurants returned 23 cafes near Gan
    56.88s  user  발화 시작: 오.
    57.66s  user  발화 끝
    60.98s  agent 발화 시작: 조용하고 분위기 좋은 카페를 찾으시는 건가요?
    61.06s  agent 발화 끝
    63.94s  agent 발화 끝
    64.72s  user  발화 시작: 네, 그런 곳이요.
    65.57s  <ret> 발화 (turn21 첫 프레임)
    65.89s  agent 발화 시작: <ret> 강남역 근처에 조용하고 아늑한 카페는 일곱곳이 있어요. 앤트러사이트 커피 로스터스도 있습니다. 거
    65.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: (tool result) Restaurants_2 FindRestaurants returned 7 cafes near Gang
    66.10s  user  발화 끝
    73.43s  user  발화 시작: 앤트러사이트 커피 로스터스… 가볼 만하겠네요.
    73.49s  agent 발화 끝
    76.87s  agent 발화 시작: 네, 분위기가 정말 좋아요. 근처에 맛집도 많아요.
    76.89s  user  발화 끝
    79.99s  user  발화 시작: 맛집도 추천해 주세요.
    80.11s  agent 발화 끝
    81.65s  <ret> 발화 (turn25 첫 프레임)
    81.73s  agent 발화 시작: <ret> 강남역 근처에는 한식당이 열다섯곳이 있어요. 교촌치킨과 비빔밥 스토리도 있습니다. 어떤 종류의 음
    81.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: (tool result) Restaurants_2 FindRestaurants returned 15 Korean restaur
    81.88s  user  발화 끝
    90.11s  user  발화 시작: 음… 비빔밥이 좋겠네요.
    90.25s  agent 발화 끝
    91.80s  agent 발화 시작: 비빔밥 스토리는 평이 아주 좋답니다.
    91.91s  user  발화 끝
    93.91s  agent 발화 끝
