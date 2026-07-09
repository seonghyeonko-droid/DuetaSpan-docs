# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Morgan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-03",
#       "category": "home",
#       "text": "User's home address is 461 Cedar Lane."
#     },
#     {
#       "date": "2026-06-25",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2026-06-11",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 잭 소크랑 라파엘라 레지 선수, 혹시 같이 하는 스포츠가 뭐였 | S2 와, US 오픈에서 우승했다니 대단하네요. 그런데 그 우승이  | S3 아직도 활동하고 있다니 멋지네요. 혹시 레지 선수는 주로 어떤 | S4 그렇군요. 그럼 잭 소크 선수도 다른 파트너와 우승한 적이 있

     0.00s  user  발화 시작: 잭 소크랑 라파엘라 레지 선수, 혹시 같이 하는 스포츠가 뭐였죠?
     4.76s  user  발화 끝
     5.01s  agent 발화 시작: 음, 두 분이 함께 했던 스포츠에 대해 알아볼까요?
     8.01s  <ret> 발화 (turn2 첫 프레임)
     8.40s  agent 발화 시작: <ret> 두 분은 테니스 경기를 함께 했습니다. 잭 소크 선수와 라파엘라 레지 선수는 테니스 선수였습니다.
     8.53s  agent 발화 끝
     9.21s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.25s]: Jack Sock and Raffaella Reggi both competed in tennis.
    12.61s  user  발화 시작: 음.
    13.20s  user  발화 끝
    15.98s  user  발화 시작: 테니스요? 음… 저는 그 두 분이 테니스를 쳤다는 걸 처음 알았네요. 혹시 다른 경기에도 같이 나간 적이 있
    15.99s  agent 발화 끝
    24.88s  agent 발화 시작: [curious] 다른 경기 출전 여부에 대해서도 찾아볼 수 있습니다.
    24.93s  user  발화 끝
    28.23s  <ret> 발화 (turn6 첫 프레임)
    28.38s  agent 발화 시작: <ret> 두 분은 혼합 복식 테니스에서 파트너였습니다. 잭 소크 선수와 라파엘라 레지 선수는 혼합 복식 테
    28.49s  agent 발화 끝
    29.43s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.92s]: Jack Sock and Raffaella Reggi partnered in mixed doubles tennis.
    37.13s  agent 발화 끝
    37.98s  user  발화 시작: 아, 혼합 복식이군요. 그럼 혹시 우승한 적이라도 있나요?
    42.32s  agent 발화 시작: 우승 기록이 있는지 확인해 보겠습니다.
    42.47s  user  발화 끝
    44.30s  <ret> 발화 (turn9 첫 프레임)
    44.69s  agent 발화 시작: <ret> 잭 소크와 라파엘라 레지는 US 오픈 혼합 복식에서 우승했습니다. 잭 소크 선수와 라파엘라 레지 
    44.91s  agent 발화 끝
    46.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.63s]: Jack Sock and Raffaella Reggi won the US Open mixed doubles title.
    55.33s  user  발화 시작: 와, US 오픈에서 우승했다니 대단하네요. 그런데 그 우승이 언제였죠?
    55.49s  agent 발화 끝
    60.40s  agent 발화 시작: 우승 연도를 알아봐 드릴게요.
    60.46s  user  발화 끝
    62.13s  <ret> 발화 (turn12 첫 프레임)
    62.28s  agent 발화 시작: <ret> 두 분은 이천십팔년에 US 오픈 혼합 복식에서 우승했습니다. 잭 소크 선수와 라파엘라 레지 선수는
    62.48s  agent 발화 끝
    64.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.51s]: Jack Sock and Raffaella Reggi won the US Open mixed doubles title in 2
    71.08s  user  발화 시작: 진짜요?
    72.04s  user  발화 끝
    73.55s  agent 발화 끝
    74.17s  user  발화 시작: 이천십팔년이군요. 잭 소크 선수는 지금도 테니스를 치나요?
    80.15s  user  발화 끝
    80.49s  agent 발화 시작: 잭 소크 선수의 현재 활동에 대해 알아볼까요?
    83.27s  <ret> 발화 (turn16 첫 프레임)
    83.50s  agent 발화 시작: <ret> 잭 소크 선수는 현재 은퇴했습니다. 잭 소크 선수는 이천이십삼년에 프로 테니스 선수로서 은퇴했습니
    83.55s  agent 발화 끝
    84.63s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.10s]: Jack Sock announced his retirement from professional tennis in 2023.
    91.56s  agent 발화 끝
    91.57s  user  발화 시작: 아, 은퇴했군요. 그럼 라파엘라 레지 선수는 아직 선수로 활동하고 있나요?
    97.49s  user  발화 끝
    97.75s  agent 발화 시작: 라파엘라 레지 선수의 활동 상황을 확인해 보겠습니다.
   101.83s  <ret> 발화 (turn19 첫 프레임)
   102.14s  agent 발화 시작: <ret> 라파엘라 레지 선수는 이천이십사년 오월 현재도 활동 중입니다. 라파엘라 레지 선수는 이천이십사년 
   102.28s  agent 발화 끝
   103.03s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.61s]: As of May 2024, Raffaella Reggi continues to compete professionally.
   109.05s  user  발화 시작: 그렇군요.
   110.02s  user  발화 끝
   112.53s  agent 발화 끝
   113.63s  user  발화 시작: 아직도 활동하고 있다니 멋지네요. 혹시 레지 선수는 주로 어떤 스타일의 경기를 하는 편인가요?
   120.94s  agent 발화 시작: 라파엘라 레지 선수의 경기 스타일에 대해 자세히 알아볼까요?
   121.05s  user  발화 끝
   124.39s  <ret> 발화 (turn23 첫 프레임)
   124.78s  agent 발화 시작: <ret> 라파엘라 레지 선수는 주로 더블 경기에서 강점을 보입니다. 라파엘라 레지 선수는 더블 경기에서 뛰
   124.82s  agent 발화 끝
   126.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.25s]: Raffaella Reggi is primarily known for her success in doubles tennis.
   130.83s  user  발화 시작: 음.
   131.46s  user  발화 끝
   133.82s  agent 발화 끝
   133.91s  user  발화 시작: 더블이군요. 그럼 잭 소크 선수도 더블을 주로 했나요?
   138.58s  user  발화 끝
   138.64s  agent 발화 시작: 잭 소크 선수의 경기 스타일도 확인해 보겠습니다.
   141.94s  <ret> 발화 (turn27 첫 프레임)
   142.17s  agent 발화 시작: <ret> 잭 소크 선수도 싱글과 더블 모두에서 활약했습니다. 잭 소크 선수는 싱글과 더블 경기 모두에서 뛰
   142.33s  agent 발화 끝
   143.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.82s]: Jack Sock competed in both singles and doubles throughout his career.
   151.44s  agent 발화 끝
   151.61s  user  발화 시작: 그렇군요. 두 분의 조합은 정말 대단했던 것 같아요. 혹시 다른 파트너와도 우승한 적이 있나요?
   158.77s  agent 발화 시작: 다른 파트너와의 우승 기록을 찾아볼까요?
   158.92s  user  발화 끝
   161.39s  <ret> 발화 (turn30 첫 프레임)
   161.78s  agent 발화 시작: <ret> 라파엘라 레지 선수는 다양한 파트너와 함께 우승 경험이 있습니다. 라파엘라 레지 선수는 여러 파트
   161.96s  agent 발화 끝
   163.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.01s]: Raffaella Reggi has won titles with multiple different partners.
   172.35s  agent 발화 끝
   172.96s  user  발화 시작: 그렇군요. 그럼 잭 소크 선수도 다른 파트너와 우승한 적이 있을까요?
   178.66s  user  발화 끝
   178.70s  agent 발화 시작: 잭 소크 선수의 다른 파트너와의 우승 기록을 확인해 보겠습니다.
   183.13s  <ret> 발화 (turn33 첫 프레임)
   183.36s  agent 발화 시작: <ret> 잭 소크 선수는 코코 가우프 선수와 함께 우승한 적이 있습니다. 잭 소크 선수는 코코 가우프 선수
   183.42s  agent 발화 끝
   185.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.61s]: Jack Sock won a title with Coco Gauff as his partner.
   193.04s  agent 발화 끝
   193.06s  user  발화 시작: 코코 가우프 선수와도 함께 했다니, 정말 다양한 선수들과 파트너십을 맺었군요.
   199.40s  agent 발화 시작: 네, 두 분 모두 다양한 선수들과 좋은 파트너십을 보여주었습니다.
   199.50s  user  발화 끝
   200.89s  user  발화 시작: 네.
   201.47s  user  발화 끝
   203.77s  agent 발화 시작: 혹시 더 궁금한 점이 있으신가요?
   204.02s  agent 발화 끝
   206.13s  agent 발화 끝
   206.21s  user  발화 시작: 음… 지금은 괜찮아요. 정말 감사합니다.
   210.28s  agent 발화 시작: 도움이 되었다니 기쁩니다. 언제든지 필요하시면 다시 찾아주세요.
   210.33s  user  발화 끝
   215.14s  agent 발화 끝
