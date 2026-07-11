# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "연현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-06",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-27",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-10-19",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2025-09-11",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-08-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 브리엔 씨. 지금 부산 시간 몇 시예요? | S2 아, 네. 지난번에 얘기했던 마라톤 훈련… 오늘 저녁에 할 예 | S3 음… 혹시 제가 고양이 이름이 뭐였죠? 기억이 잘 안 나네요. | S4 아, 맞다! 루나! 고맙습니다.

     0.00s  agent 발화 시작: 안녕하세요, 연현님! 저는 여러분을 도와드리는 브리엔이라고 해요. 오늘 하루 잘 보내셨나요?
     5.33s  agent 발화 끝
     5.55s  user  발화 시작: 안녕하세요, 브리엔 씨. 지금 부산 시간 몇 시예요?
     8.96s  <ret> 발화 (turn2 첫 프레임)
     9.01s  user  발화 끝
     9.04s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 세시 십칠분이에요. 혹시 오늘 특별한 계획 있으신가요?
     9.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.97s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Asia/Seoul rig
    15.01s  agent 발화 끝
    15.11s  user  발화 시작: 아, 네. 지난번에 얘기했던 마라톤 훈련… 오늘 저녁에 할 예정이에요.
    19.85s  agent 발화 시작: 아, 마라톤 훈련이요! 정말 멋지네요. 꾸준히 하시면 분명 좋은 결과가 있을 거예요.
    20.06s  user  발화 끝
    23.11s  user  발화 시작: 네.
    23.70s  user  발화 끝
    26.28s  agent 발화 끝
    26.55s  user  발화 시작: 음… 혹시 제가 고양이 이름이 뭐였죠? 기억이 잘 안 나네요.
    29.66s  <ret> 발화 (turn7 첫 프레임)
    29.98s  agent 발화 시작: <ret> 고양이 이름이 루나였어요. 예쁜 이름이죠. 루나와 함께 즐거운 시간 보내세요.
    29.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: [2025-10-27] User has a tabby cat named Luna.
    30.24s  user  발화 끝
    35.12s  user  발화 시작: 아, 맞다! 루나! 고맙습니다.
    35.16s  agent 발화 끝
    37.23s  agent 발화 시작: 천만에요. 언제든 궁금한 점이 있으시면 저에게 말씀해 주세요. 제가 항상 곁에서 응원할게요.
    37.38s  user  발화 끝
    44.33s  agent 발화 끝
