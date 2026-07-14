# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "재연",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "trip",
#       "text": "User is planning a trip to the Amalfi Coast in May."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "bloodtype",
#       "text": "User's blood type is B+."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "coffee",
#       "text": "User's usual coffee order is an iced americano."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "commute",
#       "text": "User bikes to work."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "child",
#       "text": "User has a child named Mina, age 1."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-13",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2025-12-26",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 집에서 하는 비디오 게임이… | S2 …언제부터 인기를 끌기 시작했는지 궁금한데… | S3 아, 천구백칠십년대군요. 그 때는… | S4 …어떤 게임이 제일 인기 있었어요?

     0.00s  user  발화 시작: 음… 집에서 하는 비디오 게임이…
     2.86s  user  발화 시작: …언제부터 인기를 끌기 시작했는지 궁금한데…
     2.86s  user  발화 끝
     5.38s  <ret> 발화 (turn2 첫 프레임)
     5.73s  agent 발화 시작: <ret> 집에서 하는 비디오 게임 콘솔은 천구백칠십년대부터 널리 인기를 얻기 시작했어요. 혹시 특정 게임에
     5.73s  user  발화 끝
     6.35s  ⚡SPAN 주입 [d'=0.97s / d_lead=9.74s]: During the 1970s, home video game consoles began to gain widespread po
    15.47s  user  발화 시작: 네.
    15.47s  agent 발화 끝
    16.04s  user  발화 시작: 아, 천구백칠십년대군요. 그 때는…
    16.04s  user  발화 끝
    18.33s  user  발화 시작: …어떤 게임이 제일 인기 있었어요?
    18.33s  user  발화 끝
    20.89s  <ret> 발화 (turn6 첫 프레임)
    21.19s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.17s]: Pong, released in 1972, was one of the first arcade games to become po
    21.20s  agent 발화 시작: <ret> 천구백칠십이년에 출시된 퐁이 집에서 인기를 얻은 최초의 아케이드 게임 중 하나였어요. [happy
    21.20s  user  발화 끝
    30.36s  agent 발화 끝
