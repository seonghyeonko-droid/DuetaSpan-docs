# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "태담",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-23",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 이천십육년에 가장 영향력… | S2 …있는 사람들이 누구였는지 궁금해서요… | S3 아, 트럼프요? 그 외에… | S4 …다른 사람들은 누가 있었나요?

     0.00s  user  발화 시작: 음… 이천십육년에 가장 영향력…
     2.70s  user  발화 시작: …있는 사람들이 누구였는지 궁금해서요…
     2.70s  user  발화 끝
     5.05s  <ret> 발화 (turn2 첫 프레임)
     5.40s  agent 발화 시작: <ret> 이천십육년에 가장 영향력 있는 사람 중 한 명으로 도널드 트럼프가 타임 매거진에서 선정되었답니다.
     5.40s  user  발화 끝
     6.02s  ⚡SPAN 주입 [d'=0.97s / d_lead=8.77s]: Donald Trump was named one of the most influential people in the world
    14.17s  user  발화 시작: 아, 트럼프요? 그 외에…
    14.17s  agent 발화 끝
    16.87s  user  발화 시작: …다른 사람들은 누가 있었나요?
    16.87s  user  발화 끝
    19.57s  agent 발화 시작: 네.
    19.57s  user  발화 끝
    19.79s  <ret> 발화 (turn6 첫 프레임)
    20.09s  ⚡SPAN 주입 [d'=0.30s / d_lead=8.10s]: Time magazine also listed Hillary Clinton, Barack Obama, and Mark Zuck
    20.24s  agent 발화 시작: <ret> 힐러리 클린턴, 버락 오바마, 그리고 마크 저커버그도 이천십육년에 영향력 있는 사람들로 꼽혔어요.
    20.24s  agent 발화 끝
    28.34s  agent 발화 끝
