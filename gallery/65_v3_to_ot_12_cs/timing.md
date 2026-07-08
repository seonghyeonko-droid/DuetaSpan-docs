# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 마침 궁금했는데요, 마이클 잭슨의 “Beat It” 기타 솔로를 실제로 연주한 사람이 누구였는지요. 계속 마
     7.16s  <ret> 발화 (turn1 첫 프레임)
     7.56s  agent 발화 시작: <ret> 네, 꽤 인기 있는 질문이네요. 에디 반 헤일런이 그 상징적인 기타 솔로를 연주한 것으로 알려져 
     7.60s  user  발화 끝
     8.20s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.13s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    14.37s  agent 발화 끝
    14.82s  user  발화 시작: 와, 정말인가요? 잭슨의 정규 밴드 멤버 중 한 명이라고 생각했어요.
    19.72s  agent 발화 시작: 잭슨이 이미 떠오르는 스타였던 반 헤일런을 그 곡에 참여시키기 위해 노력한 건 대단한 일이었어요.
    19.87s  user  발화 끝
    26.20s  user  발화 시작: 저기, 혹시 쓰레기 버리셨어요?
    26.20s  agent 발화 끝
    28.62s  user  발화 시작: 죄송해요. 그런데 반 헤일런이 잭슨과 함께 작업하는 것을 주저했는지 궁금해요. 이야기가 있던데요.
    28.69s  user  발화 끝
    34.94s  <ret> 발화 (turn6 첫 프레임)
    35.17s  agent 발화 시작: <ret> 네, 처음에는 약간의 망설임이 있었어요. 반 헤일런은 처음에는 “Beat It”에 기여한 것에 대
    35.39s  user  발화 끝
    36.38s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.05s]: Eddie Van Halen initially refused payment for his work on “Beat It”.
    45.60s  user  발화 시작: 정말 멋지네요. 왜 돈을 받고 싶지 않았는지 설명한 적이 있나요?
    45.84s  agent 발화 끝
    50.28s  user  발화 끝
    50.51s  agent 발화 시작: 그는 그 프로젝트가 재미있었고, 잭슨이 록 기타리스트와 협업하려는 의지가 있다는 점을 존경했다고 말했어요.
    57.60s  agent 발화 끝
