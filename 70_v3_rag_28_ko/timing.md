# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "소진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-18",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-06-30",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 애비 리 댄스 컴퍼니가 처음 시작한 곳이 어디였는지 알아 | S2 로스앤젤레스로 옮겼다고요? 왜 그랬어요? | S3 잠깐만요, 혹시 애비 리 밀러 선생님은 원래 피츠버그에서 다른 | S4 혹시 그 시절에 어떤 스타일의 춤을 주로 가르쳤는지 알 수 있

     0.00s  user  발화 시작: 혹시 애비 리 댄스 컴퍼니가 처음 시작한 곳이 어디였는지 알아요?
     4.60s  <ret> 발화 (turn1 첫 프레임)
     4.92s  agent 발화 시작: <ret> 원래 애비 리 댄스 컴퍼니는 천구백팔십칠년에 애비 리 밀러가 설립했는데, 페닌슐레이니아주 피츠버그
     4.92s  ⚡SPAN 주입 [d'=1.44s / d_lead=8.37s]: The original Abby Lee Dance Company was located in Pittsburgh, Pennsyl
     4.92s  user  발화 끝
    13.30s  user  발화 시작: 피츠버그라고요? 음…
    13.30s  agent 발화 끝
    14.28s  user  발화 시작: …그건 좀 의외네요. 혹시 그곳에서 얼마나 오래 있었어요?
    14.28s  user  발화 끝
    17.90s  <ret> 발화 (turn4 첫 프레임)
    18.22s  agent 발화 시작: <ret> 애비 리 댄스 컴퍼니는 이천팔년에 캘리포니아주 로스앤젤레스로 옮기기 전까지, 피츠버그에서 대략 이
    18.22s  ⚡SPAN 주입 [d'=1.92s / d_lead=10.83s]: Abby Lee Dance Company operated in Pittsburgh for approximately twenty
    18.22s  user  발화 끝
    29.05s  user  발화 시작: 응.
    29.05s  agent 발화 끝
    29.55s  user  발화 시작: 로스앤젤레스로 옮겼다고요? 왜 그랬어요?
    29.55s  user  발화 끝
    31.28s  <ret> 발화 (turn7 첫 프레임)
    31.52s  agent 발화 시작: <ret> 애비 리 밀러는 엔터테인먼트 산업에서 기회를 찾고 브랜드를 확장하기 위해서 댄스 컴퍼니를 로스앤젤
    31.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.34s]: Abby Lee Miller relocated the dance company to Los Angeles to pursue o
    31.52s  user  발화 끝
    41.86s  user  발화 시작: 엔터테인먼트 산업이라… 혹시 유명한 댄서들을 많이 배출했어요?
    41.86s  agent 발화 끝
    44.98s  <ret> 발화 (turn9 첫 프레임)
    45.30s  agent 발화 시작: <ret> 애비 리 댄스 컴퍼니는 Dance Moms 같은 티 브이 프로그램에 출연했고, 프로 댄서로 진출한
    45.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.83s]: The Abby Lee Dance Company has trained numerous dancers who have appea
    45.30s  user  발화 끝
    56.14s  user  발화 시작: Dance Moms에 나왔던 댄서들이요? 아, 맞다. 그 프로그램 봤었는데.
    56.14s  agent 발화 끝
    60.57s  agent 발화 시작: 그 프로그램은 춤에 대한 열정을 보여주는—
    60.57s  user  발화 끝
    63.52s  user  발화 시작: 잠깐만요, 혹시 애비 리 밀러 선생님은 원래 피츠버그에서 다른 댄스 스튜디오를 운영했었어요?
    63.52s  agent 발화 끝
    69.03s  <ret> 발화 (turn13 첫 프레임)
    69.43s  agent 발화 시작: <ret> 애비 리 밀러 선생님은 애비 리 댄스 컴퍼니를 설립하기 전에, 피츠버그에서 Marilyn Horn
    69.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.33s]: Before establishing the Abby Lee Dance Company, Abby Lee Miller owned 
    69.43s  user  발화 끝
    80.76s  user  발화 시작: 음.
    80.76s  agent 발화 끝
    81.25s  agent 발화 시작: 작은 스튜디오에서 실력을 쌓고 더 큰 꿈을 꾸게 된 것 같아요. 저도 사람들과 소통하는 일을 하면서 비슷한 
    81.25s  user  발화 끝
    90.61s  user  발화 시작: Marilyn Horne Dance Center는 언제부터 운영했어요?
    90.61s  agent 발화 끝
    93.32s  <ret> 발화 (turn17 첫 프레임)
    93.56s  agent 발화 시작: <ret> Marilyn Horne Dance Center는 천구백팔십칠년에 애비 리 밀러 선생님이 설립했고
    93.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.33s]: Marilyn Horne Dance Center was founded by Abby Lee Miller in 1987 and 
    93.56s  user  발화 끝
   104.89s  user  발화 시작: 어.
   104.89s  agent 발화 끝
   105.38s  user  발화 시작: 그럼 애비 리 댄스 컴퍼니는 천구백팔십칠년부터 시작된 거네요?
   105.38s  user  발화 끝
   109.32s  agent 발화 시작: 네, 맞아요. 천구백팔십칠년부터 시작해서 피츠버그에서 오랜 시간 동안 운영되었죠.
   109.32s  user  발화 끝
   113.75s  user  발화 시작: 응.
   113.75s  agent 발화 끝
   114.24s  user  발화 시작: 혹시 그 시절에 어떤 스타일의 춤을 주로 가르쳤는지 알 수 있을까요?
   114.24s  user  발화 끝
   119.26s  <ret> 발화 (turn23 첫 프레임)
   119.66s  agent 발화 시작: <ret> 애비 리 댄스 컴퍼니는 처음에는 리리컬과 컨템퍼러리 댄스 스타일을 중심으로 가르쳤고, 나중에는 재
   119.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.36s]: The Abby Lee Dance Company initially focused on teaching lyrical and c
   119.66s  user  발화 끝
   129.02s  user  발화 시작: 다양한 스타일을 가르쳤군요. 그럼 애비 리 선생님은 발레도 직접 가르쳤어요?
   129.02s  agent 발화 끝
   133.94s  agent 발화 시작: 그런 것 같아요. 다양한 스타일을 가르치면서 학생들의 재능을 키워주신 것 같아요.
   133.94s  user  발화 끝
   139.36s  agent 발화 끝
