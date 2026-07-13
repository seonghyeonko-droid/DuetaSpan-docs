# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "주현",
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
#       "date": "2026-05-25",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 파리에서 암스테르담까지 차로 가면 얼마나 걸릴까요? | S2 벨기에 음식은 맛있을 것 같은데, 브뤼헤에 있는 곳으로 가볼까 | S3 …혹시 브뤼헤에 있는 다른 맥주 양조장도 추천해 주실 수 있나 | S4 감사합니다, 오라리미. 덕분에 여행 계획이 훨씬 수월해졌어요.

     0.00s  user  발화 시작: 파리에서 암스테르담까지 차로 가면 얼마나 걸릴까요?
     2.58s  <ret> 발화 (turn1 첫 프레임)
     3.05s  agent 발화 시작: <ret> 파리에서 암스테르담까지는 대략 오백이킬로미터이고, 교통 상황에 따라 네시간 사십오분 정도 걸립니다
     3.05s  user  발화 끝
     3.33s  ⚡SPAN 주입 [d'=0.76s / d_lead=5.58s]: (tool result) The drive from Paris to Amsterdam is approximately 312 m
     8.63s  agent 발화 시작: 운전 중에 잠시 들를 만한 곳을 찾아드릴까요?
     8.63s  agent 발화 끝
    12.18s  user  발화 시작: 네, 중간에 잠시 들러서 점심을 먹을 만한 곳이 있을까요?
    12.18s  agent 발화 끝
    16.15s  <ret> 발화 (turn4 첫 프레임)
    16.75s  agent 발화 시작: <ret> 파리에서 암스테르담 가는 길에는 맛집이 많아요. 브뤼셀의 르 렐레 드 랑트르코트는 스테이크 프라이
    16.75s  user  발화 끝
    17.44s  ⚡SPAN 주입 [d'=1.28s / d_lead=12.18s]: (tool result) There are many restaurants along the route from Paris to
    28.94s  agent 발화 시작: 혹시 특별히 선호하는 종류의 음식이 있으신가요?
    28.94s  agent 발화 끝
    31.98s  user  발화 시작: 네.
    31.98s  agent 발화 끝
    32.49s  user  발화 시작: 벨기에 음식은 맛있을 것 같은데, 브뤼헤에 있는 곳으로 가볼까요?
    32.49s  user  발화 끝
    36.71s  <ret> 발화 (turn8 첫 프레임)
    37.06s  agent 발화 시작: <ret> 브뤼흐의 드 할베 만 양조장은 벨기에 브뤼흐 월플레인 이십육번지에 있고, 오전 열한시부터 오후 여
    37.06s  user  발화 끝
    37.26s  ⚡SPAN 주입 [d'=0.55s / d_lead=7.61s]: De Halve Maan brewery in Bruges is located at Walplein 26, 8000 Brugge
    44.67s  agent 발화 시작: 지금 출발하면 점심시간에 맞춰 도착할 수 있을 것 같아요.
    44.67s  agent 발화 끝
    49.24s  user  발화 시작: 좋아요, 그럼 바로 브뤼헤로 가는 길 안내를 받을 수 있을까요?
    49.24s  agent 발화 끝
    54.04s  <ret> 발화 (turn11 첫 프레임)
    54.32s  agent 발화 시작: <ret> 파리에서 브뤼흐 드 할베 만 양조장까지는 대략 삼백이십킬로미터이고, 통행료와 연료비가 사십유로에서
    54.32s  user  발화 끝
    54.59s  ⚡SPAN 주입 [d'=0.55s / d_lead=10.66s]: (tool result) The driving route from Paris to De Halve Maan brewery in
    64.98s  agent 발화 시작: 실시간 교통 상황을 반영한 최적의 경로를 안내해 드릴게요—
    64.98s  agent 발화 끝
    69.04s  user  발화 시작: …혹시 브뤼헤에 있는 다른 맥주 양조장도 추천해 주실 수 있나요?
    69.04s  agent 발화 끝
    74.11s  agent 발화 시작: 네.
    74.11s  user  발화 끝
    74.54s  <ret> 발화 (turn15 첫 프레임)
    74.62s  agent 발화 시작: <ret> 드 할베 만 외에도 브뤼헤에는 과일 에일이 유명한 부르고뉴 데 플랑드르와 다양한 맥주와 플랑드르 
    74.62s  agent 발화 끝
    74.89s  ⚡SPAN 주입 [d'=0.35s / d_lead=9.65s]: In addition to De Halve Maan, Bruges boasts Bourgogne des Flandres, kn
    84.27s  agent 발화 시작: 캄브리누스는 맥주 종류가 아주 많다고 하네요.
    84.27s  agent 발화 끝
    87.31s  user  발화 시작: 캄브리누스도 괜찮겠네요. 그럼 드 할베 만 양조장과 캄브리누스 두 곳 모두 경로에 포함해 주시겠어요?
    87.31s  agent 발화 끝
    94.00s  <ret> 발화 (turn18 첫 프레임)
    94.41s  ⚡SPAN 주입 [d'=0.41s / d_lead=10.66s]: (tool result) The driving route from Paris to both De Halve Maan and C
    94.42s  agent 발화 시작: <ret> 파리에서 브뤼흐의 드 할베 만과 캄브리누스까지는 대략 삼백이십오킬로미터이고, 통행료와 연료비가 사
    94.42s  user  발화 끝
   105.08s  agent 발화 시작: 두 곳 모두 즐거운 시간 보내시길 바랍니다.
   105.08s  agent 발화 끝
   108.63s  user  발화 시작: 네.
   108.63s  agent 발화 끝
   109.14s  user  발화 시작: 감사합니다, 오라리미. 덕분에 여행 계획이 훨씬 수월해졌어요.
   109.14s  user  발화 끝
   112.69s  agent 발화 시작: 천만에요. 여행 계획을 짜는 데 도움을 드릴 수 있어서 기쁩니다.
   112.69s  user  발화 끝
   117.77s  agent 발화 끝
