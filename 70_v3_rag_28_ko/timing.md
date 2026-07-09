# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정슬",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-07-02",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "home",
#       "text": "User's home address is 960 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 퇴역 군인부를 언제 만들었대? 갑자기 궁금해졌어.
     3.00s  <ret> 발화 (turn1 첫 프레임)
     3.32s  agent 발화 시작: <ret> 퇴역 군인부 관련해서 말씀드리자면… 미국 퇴역 군인부는 1930년 7월 21일에 만들어졌어요.
     3.47s  user  발화 끝
     3.96s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.80s]: The United States Department of Veterans Affairs was established on Ju
    11.01s  agent 발화 끝
    12.27s  user  발화 시작: 1930년이라고? 그 전에 퇴역 군인들을 위한 건 없었어? 뭔가 이상한데.
    17.43s  agent 발화 시작: 그 전에도 퇴역 군인들을 위한 지원은 있었지만, 지금처럼 부서 형태로 정식으로 만들어진 건 그때부터예요.
    17.68s  user  발화 끝
    25.35s  user  발화 시작: 음… 근데 그게 또 정확히 뭘 의미하는 건데? 그냥 이름만 바뀐 거야, 아니면 완전히 새로운 기관이야?
    25.45s  agent 발화 끝
    32.22s  <ret> 발화 (turn5 첫 프레임)
    32.29s  agent 발화 시작: <ret> 새로운 기관으로 완전히 재편되었죠. 1930년 이전에는 1917년에 설립된 전쟁 위험 보험국에서 
    32.34s  user  발화 끝
    33.58s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.53s]: Prior to 1930, veteran’s benefits were administered by the Bureau of W
    41.79s  agent 발화 끝
