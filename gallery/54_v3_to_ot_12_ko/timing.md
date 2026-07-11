# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "태서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-06-06",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-06",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 마스터스 토너먼트가 열리는 골프장 이름이 뭐예요? | S2 잠깐만, 누구한테 전화 왔어? | S3 …잘 자려면 어떻게 해야 할까요? | S4 명상요? 잘 모르겠어요.

     0.00s  user  발화 시작: 마스터스 토너먼트가 열리는 골프장 이름이 뭐예요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.03s  agent 발화 시작: <ret> 마스터스 토너먼트는 미국 조지아주 어거스타에 있는 어거스타 내셔널 골프 클럽에서 열립니다.
     0.03s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: Augusta National Golf Club is a private golf club in Augusta, Georgia,
     0.03s  user  발화 끝
     0.08s  user  발화 시작: 응.
     0.08s  agent 발화 끝
     0.08s  agent 발화 시작: 골프 좋아하세요? 저는 편안한 밤을 위한 최적의 온도를 찾아드릴 수 있어요.
     0.08s  user  발화 끝
     0.13s  user  발화 시작: 음… 요즘 잠을 잘 못 자서요.
     0.13s  agent 발화 끝
     0.15s  <ret> 발화 (turn17 첫 프레임)
     0.16s  agent 발화 시작: 잠자리에 들기 전에 따뜻한 차 한 잔은 어떠세요? 숙면에 도움이 될 수 있답니다.
     0.16s  user  발화 끝
     0.22s  user  발화 시작: 차는 괜찮은데, 뭔가 더 좋은 방법이 있을까요?
     0.22s  agent 발화 끝
     0.25s  agent 발화 시작: 혹시 잠들기 전 스마트폰 사용은 안 하시죠? 블루라이트가 수면을 방해할 수 있어요.
     0.25s  user  발화 끝
     0.31s  user  발화 시작: 응.
     0.31s  agent 발화 끝
     0.31s  user  발화 시작: 아, 그거… 잘 안 돼요. 습관이라.
     0.31s  user  발화 끝
     0.34s  agent 발화 시작: 습관을 고치려면 시간이 걸리죠. 그래도 조금씩 줄여보는 건 어떠세요?
     0.34s  user  발화 끝
     0.38s  user  발화 시작: 응.
     0.38s  agent 발화 끝
     0.39s  user  발화 시작: 잠깐만, 누구한테 전화 왔어?
     0.39s  user  발화 끝
     0.40s  <ret> 발화 (turn20 첫 프레임)
     0.41s  user  발화 시작: 아, 죄송합니다. 잠시만요.
     0.41s  user  발화 끝
     0.42s  agent 발화 시작: 천천히 말씀해주세요.
     0.42s  user  발화 끝
     0.43s  user  발화 시작: 지금 다시 말씀드릴게요. 잠을…
     0.43s  agent 발화 끝
     0.45s  user  발화 시작: …잘 자려면 어떻게 해야 할까요?
     0.45s  user  발화 끝
     0.47s  agent 발화 시작: <ret> 잠을 조절하는 뇌에서 생성되는 호르몬인 멜라토닌을 섭취하는 것도 도움이 될 수 있습니다.
     0.47s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: Melatonin is a hormone that the brain produces that helps regulate sle
     0.47s  user  발화 끝
     0.49s  <ret> 발화 (turn23 첫 프레임)
     0.53s  user  발화 시작: 어어.
     0.53s  agent 발화 끝
     0.53s  user  발화 시작: 멜라토닌이요? 그거 어디서 살 수 있어요?
     0.53s  user  발화 끝
     0.56s  agent 발화 시작: <ret> 대부분의 약국과 건강식품점, 그리고 아마존이나 아이허브 같은 온라인 쇼핑몰에서 멜라토닌을 구매할 
     0.56s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Melatonin is available at most drugstores and health foo
     0.56s  user  발화 끝
     0.62s  user  발화 시작: 어어.
     0.62s  agent 발화 끝
     0.63s  user  발화 시작: 아하, 그렇군요. 그럼 오늘 날씨는 어때요?
     0.63s  user  발화 끝
     0.65s  agent 발화 시작: <ret> 현재 서울의 날씨는 기온 이십팔 점 삼도, 습도 칠십팔퍼센트, 풍속은 시속 삼 점 이킬로미터입니다
     0.65s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Current weather in Seoul is 28.3°C, humidity 78%, wind 3
     0.65s  user  발화 끝
     0.72s  agent 발화 시작: 오늘 밤은 멜라토닌과 함께 시원하게 주무시겠어요?
     0.72s  agent 발화 끝
     0.73s  <ret> 발화 (turn32 첫 프레임)
     0.75s  user  발화 시작: 네, 한번 시도해 볼게요. 고마워요.
     0.75s  agent 발화 끝
     0.77s  agent 발화 시작: 언제든 편안한 휴식을 위해 도와드릴게요. 혹시 잠들기 전 명상을 해보셨나요?
     0.77s  user  발화 끝
     0.81s  user  발화 시작: 응.
     0.81s  agent 발화 끝
     0.82s  user  발화 시작: 명상요? 잘 모르겠어요.
     0.82s  user  발화 끝
     0.83s  agent 발화 시작: 명상은 마음을 차분하게 해주고 스트레스 해소에 도움이 될 수 있답니다.
     0.83s  user  발화 끝
     0.88s  user  발화 시작: 응.
     0.88s  agent 발화 끝
     0.88s  user  발화 시작: 한번 찾아볼까요?
     0.88s  user  발화 끝
     0.89s  agent 발화 시작: <ret> 캄과 헤드스페이스 같은 가이드 명상 앱에서 수면, 불안, 스트레스 해소를 위한 다양한 명상을 제공
     0.89s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Guided meditation apps like Calm and Headspace offer a v
     0.89s  user  발화 끝
     0.96s  user  발화 시작: 캄… 한번 다운로드해 봐야겠네요.
     0.96s  agent 발화 끝
     0.98s  agent 발화 시작: 좋은 선택이에요. 편안한 밤 보내세요.
     0.98s  user  발화 끝
     1.00s  agent 발화 끝
