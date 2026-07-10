# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정슬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "home",
#       "text": "User's home address is 960 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 퇴역 군인부(Department of… | S2 …Veterans Affairs)가 언제 만들어졌는지 궁금하네 | S3 천구백삼십년이라고요? 좀 더 일찍 만들어진 건 아니었나요? 혹 | S4 아, 그렇군요. 그럼 천구백삼십년에 완전히 새로운 부처가 만들

     0.00s  user  발화 시작: 음… 퇴역 군인부(Department of…
     3.37s  user  발화 끝
     4.71s  user  발화 시작: …Veterans Affairs)가 언제 만들어졌는지 궁금하네요.
     8.37s  <ret> 발화 (turn2 첫 프레임)
     8.68s  user  발화 끝
     8.69s  agent 발화 시작: <ret> 퇴역 군인부는 천구백삼십년 칠월 이십일일에 설립되었고, 여러 퇴역 군인 지원 프로그램을 통합했어요
    10.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.91s]: [source: Britannica] The Department of Veterans Affairs was establishe
    15.60s  agent 발화 끝
    15.61s  user  발화 시작: 천구백삼십년이라고요? 좀 더 일찍 만들어진 건 아니었나요? 혹시 그 전에도 비슷한 기관이 있었나요?
    22.18s  <ret> 발화 (turn4 첫 프레임)
    22.25s  agent 발화 시작: <ret> 천구백삼십년 이전에 전쟁 위험 보험국과 퇴역 군인국에서 퇴역 군인 지원을 담당했어요.
    22.33s  user  발화 끝
    23.54s  ⚡SPAN 주입 [d'=1.36s / d_lead=6.16s]: [source: History.com] Prior to 1930, veteran benefits were administere
    28.41s  agent 발화 끝
    28.44s  user  발화 시작: 아, 그렇군요. 그럼 천구백삼십년에 완전히 새로운 부처가 만들어진 건 아니고, 기존 기관들을 합친 거군요?
    35.11s  agent 발화 시작: 맞아요. 기존 기관들을 통합해서 퇴역 군인부를 새롭게 만들었어요. [happy] 예산 관리에도 도움이 될 것
    35.39s  user  발화 끝
    43.12s  agent 발화 끝
