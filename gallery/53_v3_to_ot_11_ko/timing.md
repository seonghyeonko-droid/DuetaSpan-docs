# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "소준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 오클랜드 에이스가 노히트 게임을 당한 게 언제였는지 아세 | S2 아, 죄송해요. 잠시만요. 에이스 말고 다른 팀도… | S3 …괜찮아요. 메이저리그에서 가장 최근의 노히트 게임은 언제였죠 | S4 아니요, 괜찮아요. 감사합니다.

     0.00s  user  발화 시작: 혹시 오클랜드 에이스가 노히트 게임을 당한 게 언제였는지 아세요?
     3.82s  <ret> 발화 (turn1 첫 프레임)
     4.06s  agent 발화 시작: <ret> 오클랜드 에이스가 마지막으로 노히트 게임을 당한 건 이천십팔년 사월 이십일일입니다.
     4.11s  user  발화 끝
     5.42s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.14s]: April 21, 2018 was the last time the Oakland A's were no-hit.
     9.19s  agent 발화 끝
     9.50s  user  발화 시작: 잠깐만, 그거 진짜 비싸다!
    11.62s  user  발화 끝
    11.68s  user  발화 시작: 아, 죄송해요. 잠시만요. 에이스 말고 다른 팀도…
    15.89s  user  발화 끝
    17.04s  user  발화 시작: …괜찮아요. 메이저리그에서 가장 최근의 노히트 게임은 언제였죠?
    21.43s  <ret> 발화 (turn5 첫 프레임)
    21.53s  user  발화 끝
    21.75s  agent 발화 시작: <ret> 메이저리그에서 가장 최근의 노히트 게임은 이천이십삼년 팔월 이십일일, 뉴욕 양키스의 도밍고 헤르만
    23.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.69s]: On August 21, 2023, Domingo Germán of the New York Yankees pitched a n
    29.39s  user  발화 시작: 맞아요.
    30.12s  user  발화 끝
    31.44s  agent 발화 시작: 네, 그렇습니다. 혹시 다른 팀의 기록도 확인해 드릴까요?
    31.44s  agent 발화 끝
    32.66s  user  발화 시작: 그렇죠.
    33.45s  user  발화 끝
    35.12s  user  발화 시작: 아니요, 괜찮아요. 감사합니다.
    35.32s  agent 발화 끝
    37.10s  user  발화 끝
