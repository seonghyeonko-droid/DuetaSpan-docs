# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "채빈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-14",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-11-19",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그 노래, "Don't Worry, Be Happy" 부른 사 | S2 아, 맞아, 그 사람! | S3 근데 그 노래가 언제 나왔는지 기억 안 나는데… | S4 … 그 노래가 영화에도 나왔었나?

     0.00s  user  발화 시작: 그 노래, "Don't Worry, Be Happy" 부른 사람이 누구였지?
     3.00s  <ret> 발화 (turn1 첫 프레임)
     3.23s  user  발화 끝
     3.24s  agent 발화 시작: <ret> 그 노래 "Don't Worry, Be Happy"는 미국의 싱어송라이터 바비 맥페린이 불렀어요.
     3.24s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.65s]: Bobby McFerrin is an American singer-songwriter, best known for his 19
     8.87s  user  발화 시작: 아, 맞아, 그 사람!
     8.89s  agent 발화 끝
    10.04s  agent 발화 시작: 바비 맥페린은 정말 독특한 스타일을 가진 분이시죠.
    10.25s  user  발화 끝
    11.59s  user  발화 시작: 어.
    11.94s  user  발화 끝
    13.28s  agent 발화 끝
    13.61s  user  발화 시작: 근데 그 노래가 언제 나왔는지 기억 안 나는데…
    15.86s  <ret> 발화 (turn6 첫 프레임)
    16.18s  agent 발화 시작: <ret> 그 노래는 천구백팔십팔년에 바비 맥페린의 다섯 번째 스튜디오 앨범 "Simple Pleasures
    16.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.92s]: "Don't Worry, Be Happy" was released in 1988 as the first single from 
    16.20s  user  발화 끝
    19.51s  user  발화 시작: 진짜?
    20.10s  user  발화 끝
    24.10s  agent 발화 끝
    24.15s  agent 발화 시작: 그 노래는 당시 많은 사람들에게 긍정적인 메시지를 전달하며 큰 인기를 얻었답니다 —
    29.13s  user  발화 시작: … 그 노래가 영화에도 나왔었나?
    29.81s  agent 발화 끝
    30.83s  <ret> 발화 (turn10 첫 프레임)
    31.23s  agent 발화 시작: <ret> 네, 그 노래는 천구백팔십구년에 개봉한 영화 "죽은 시인의 사회"에도 사용되었어요.
    31.23s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.47s]: The song was featured in the 1989 film "Dead Poets Society".
    31.25s  user  발화 끝
    36.70s  agent 발화 끝
