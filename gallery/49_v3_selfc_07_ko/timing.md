# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "보희",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-14",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-06-08",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-30",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-02-27",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 백칠십이 점 이 일.백육십 점 일 사 위치 좀 찾아줄 수 | S2 아니요, 괜찮아요. 부산 날씨… | S3 …좀 알려줄 수 있을까요? | S4 생각보다 덥네요.

     0.00s  user  발화 시작: 혹시 백칠십이 점 이 일.백육십 점 일 사 위치 좀 찾아줄 수 있을까요?
     3.79s  <ret> 발화 (turn1 첫 프레임)
     3.93s  user  발화 끝
     4.02s  agent 발화 시작: <ret> 서울특별시라고 하네요. 그쪽 위치입니다.
     4.03s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.58s]: (tool result) The IP address 172.217.160.142 is associated with Seoul,
     6.60s  agent 발화 끝
     7.15s  user  발화 시작: 서울이요? 음… 백칠십이 점 이 일.백육십 점 일 사으로 다시 한번 찾아줄래요?
    13.16s  <ret> 발화 (turn3 첫 프레임)
    13.40s  agent 발화 시작: <ret> 아, 네. 이번에는 부산광역시로 확인됩니다.
    13.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.56s]: (tool result) The IP address 172.217.160.143 is associated with Busan,
    13.59s  user  발화 끝
    14.76s  user  발화 시작: 네.
    15.03s  user  발화 끝
    16.75s  agent 발화 시작: 혹시 다른 IP 주소도 확인해 드릴까요? 제가 도와드릴 수 있어요.
    16.96s  agent 발화 끝
    20.49s  user  발화 시작: 아니요, 괜찮아요. 부산 날씨…
    20.59s  agent 발화 끝
    22.56s  user  발화 끝
    23.89s  user  발화 시작: …좀 알려줄 수 있을까요?
    24.75s  <ret> 발화 (turn8 첫 프레임)
    24.98s  agent 발화 시작: <ret> 부산은 현재 이십팔 점 오도이고, 습도는 육십팔퍼센트, 바람은 시속 칠 점 이킬로미터입니다.
    24.99s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.81s]: (tool result) The current weather in Busan is 28.5°C, humidity 68%, wi
    25.18s  user  발화 끝
    31.79s  agent 발화 끝
    31.80s  user  발화 시작: 생각보다 덥네요.
    32.90s  user  발화 끝
    33.30s  agent 발화 시작: 그렇죠, 조금 더운 날씨네요. 혹시 공부 계획 세우는 데 도움을 드릴까요?
    38.53s  agent 발화 끝
