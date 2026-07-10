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


     0.00s  user  발화 시작: 그… 퇴역 군인부(Department of Veterans Affairs)가 언제 만들어졌는지 궁금하네요.
     5.04s  <ret> 발화 (turn1 첫 프레임)
     5.36s  agent 발화 시작: <ret> 퇴역 군인부를 언제 만들었는지 여쭤보셨죠. 잠시만 확인해 볼게요.
     5.55s  user  발화 끝
     7.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.31s]: [source: Britannica] The Department of Veterans Affairs was establishe
     9.45s  agent 발화 시작: 퇴역 군인부는 허버트 후버 대통령에 의해 천구백삼십년 칠월 이십일일에 설립되었습니다.
     9.66s  agent 발화 끝
    13.98s  user  발화 시작: 그치.
    14.62s  user  발화 끝
    15.49s  user  발화 시작: 천구백삼십년이라고요? 그게 좀 의외네요. 전쟁 참전 용사들을 위한 부서가 그 늦게 만들어졌다는 게…
    15.57s  agent 발화 끝
    22.12s  user  발화 끝
    22.39s  agent 발화 시작: 천구백삼십년이 맞습니다. 당시에는 제1차 세계 대전 참전 용사들을 위한 지원 체계가 필요했던 시기였어요.
    27.34s  user  발화 시작: 응.
    27.83s  user  발화 끝
    31.11s  agent 발화 끝
    31.51s  user  발화 시작: 아, 그렇군요. 그럼 그 이전에는 어떻게 했어요? 참전 용사들을 그냥 내버려 뒀나요?
    35.91s  user  발화 끝
