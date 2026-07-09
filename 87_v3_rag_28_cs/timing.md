# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 정부 부처들 읽다가… 참전용사부 있잖아, 그거 언제 시작했는지 궁금해졌어.
     5.59s  <ret> 발화 (turn1 첫 프레임)
     5.99s  agent 발화 시작: <ret> 음, 좋은 질문이세요. 참전용사부는 천구백삼십칠월 이십일일에 설립되었어요.
     6.07s  user  발화 끝
     7.19s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.81s]: The United States Department of Veterans Affairs was established on Ju
    11.45s  user  발화 시작: 천구백삼십? 생각보다 엄청 최근이네, 진짜. 훨씬 오래됐을 줄 알았어.
    11.60s  agent 발화 끝
    16.19s  agent 발화 시작: 나라 역사를 생각하면 비교적 젊은 부처이긴 해요. 많은 것들이 시간이 지나면서 변하니까요.
    16.40s  user  발화 끝
    23.42s  agent 발화 끝
    24.11s  user  발화 시작: 근데 천구백삼십년 *전에* 참전용사 서비스는 없었어? 갑자기 그때부터 시작한 건 아니겠지—
    30.33s  <ret> 발화 (turn5 첫 프레임)
    30.41s  agent 발화 시작: <ret> 네, 맞아요. 질문하신 대로 천구백삼십년 이전에 참전용사 혜택은 전쟁위험보험국과 참전용사국, 두 
    30.45s  user  발화 끝
    32.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.13s]: Prior to 1930, veteran benefits were administered by the Bureau of War
    41.40s  agent 발화 끝
